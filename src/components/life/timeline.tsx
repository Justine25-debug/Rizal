import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type TimelineEvent = {
    date: string
    title: string
    description: string
    category: string
    imageUrl?: string
    imageAlt?: string
    imageCaption?: string
}

const MS_PER_DAY = 24 * 60 * 60 * 1000

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const parseTimelineDateToDayNumber = (value: string) => {
    const trimmed = value.trim()
    if (/^\d{4}$/.test(trimmed)) {
        const year = Number(trimmed)
        return Math.floor(Date.UTC(year, 0, 1) / MS_PER_DAY)
    }

    const match = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (!match) return null

    const year = Number(match[1])
    const monthIndex = Number(match[2]) - 1
    const day = Number(match[3])
    return Math.floor(Date.UTC(year, monthIndex, day) / MS_PER_DAY)
}

const formatEventDate = (value: string) => {
    const trimmed = value.trim()
	if (/^\d{4}$/.test(trimmed)) return trimmed

	const parsed = new Date(trimmed)
	if (Number.isNaN(parsed.getTime())) return trimmed

    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(parsed)
}

const spacingPxFromDateDiff = (previous: string | undefined, current: string) => {
    const previousDay = previous ? parseTimelineDateToDayNumber(previous) : null
    const currentDay = parseTimelineDateToDayNumber(current)
    if (previousDay === null || currentDay === null) return 28

    const diffDays = Math.max(0, currentDay - previousDay)

    if (diffDays <= 3) return -28
    if (diffDays <= 7) return -12
    if (diffDays <= 31) return 12

    const base = 22
    const scaled = Math.log1p(diffDays) * 10
    return clamp(base + scaled, 18, 120)
}

const CATEGORIES = [
    'Early Life and Education',
    'First Travel to Europe and Propaganda Work',
    'Return to the Philippines and Second Trip Abroad',
    'Final Return, Exile, and Execution'
]

const TIMELINE_BACKGROUND_IMAGES = [
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-13-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-16-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-18-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-23-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-24-150x150.png',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-25-150x150.png',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-26-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-27-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-28-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-29-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-30-150x150.jpg',
    'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-31-150x150.jpg',
]

const TIMELINE_BACKGROUND_REPEAT_COUNT = 420
const TIMELINE_BACKGROUND_TILES = Array.from(
    { length: TIMELINE_BACKGROUND_REPEAT_COUNT },
    (_, index) => TIMELINE_BACKGROUND_IMAGES[index % TIMELINE_BACKGROUND_IMAGES.length],
)

const getTimelineBackgroundColumnCount = (width: number) => {
    if (width >= 1280) return 7
    if (width >= 1024) return 6
    if (width >= 768) return 5
    if (width >= 640) return 4
    return 3
}

const TAB_PARAM = 'tab'

const TAB_SLUG_TO_CATEGORY: Record<string, string> = {
    'early-life': CATEGORIES[0],
    'first-travel': CATEGORIES[1],
    'return': CATEGORIES[2],
    'final-return': CATEGORIES[3],
}

const categoryToTabSlug = (category: string) => {
    const entry = Object.entries(TAB_SLUG_TO_CATEGORY).find(([, value]) => value === category)
    return entry?.[0] ?? null
}

const extractFirstUrl = (value: string) => {
    const match = value.match(/https?:\/\/\S+/)
    if (!match) return null

    return match[0].replace(/[),.]+$/, '')
}

const splitDescriptionIntoParagraphs = (description: string) => {
    return description
        .split(/\n\s*\n/g)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

type InlineLinkSpec = {
    text: string
    href: string
}

const INLINE_LINK_SPECS: InlineLinkSpec[] = [
    {
        text: 'Sa Aking Mga Kabata',
        href: 'https://en.wikipedia.org/wiki/Sa_Aking_Mga_Kabata',
    },
    {
        text: 'Kun sino ang kumathâ ng̃ "Florante" (1906)',
        href: 'https://books.google.com.ph/books/about/Kun_sino_ang_kumath%C3%A2_ng%CC%83_Florante.html?id=1S5BAQAAMAAJ&redir_esc=y',
    },
]

const renderTextWithInlineLinks = (text: string) => {
    const specs = INLINE_LINK_SPECS
    if (specs.length === 0) return [text]

    const regex = new RegExp(specs.map((spec) => escapeRegExp(spec.text)).join('|'), 'g')
    const matches = Array.from(text.matchAll(regex))
    if (matches.length === 0) return [text]

    const nodes: React.ReactNode[] = []
    let lastIndex = 0
    let matchCounter = 0
    for (const [matchText] of matches) {
        const matchIndex = text.indexOf(matchText, lastIndex)
        if (matchIndex > lastIndex) {
            nodes.push(text.slice(lastIndex, matchIndex))
        }

        const spec = specs.find((candidate) => candidate.text === matchText)
        if (spec) {
            nodes.push(
                <a
                    key={`${spec.href}-${matchIndex}-${matchCounter}`}
                    href={spec.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A72703] underline underline-offset-2 hover:opacity-80"
                >
                    {spec.text}
                </a>,
            )
        } else {
            nodes.push(matchText)
        }

        lastIndex = matchIndex + matchText.length
        matchCounter += 1
    }

    if (lastIndex < text.length) {
        nodes.push(text.slice(lastIndex))
    }

    return nodes
}

const renderTextWithLinks = (text: string) => {
    const urlRegex = /https?:\/\/\S+/g
    const urlMatches = Array.from(text.matchAll(urlRegex))
    if (urlMatches.length === 0) {
        return renderTextWithInlineLinks(text)
    }

    const nodes: React.ReactNode[] = []
    let lastIndex = 0
    let urlCounter = 0
    for (const match of urlMatches) {
        const raw = match[0]
        const matchIndex = match.index ?? text.indexOf(raw, lastIndex)
        if (matchIndex > lastIndex) {
            nodes.push(...renderTextWithInlineLinks(text.slice(lastIndex, matchIndex)))
        }

        const href = raw.replace(/[),.]+$/, '')
        const trailing = raw.slice(href.length)
        nodes.push(
            <a
                key={`url-${href}-${matchIndex}-${urlCounter}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A72703] underline underline-offset-2 hover:opacity-80"
            >
                {href}
            </a>,
        )
        if (trailing) {
            nodes.push(trailing)
        }

        lastIndex = matchIndex + raw.length
        urlCounter += 1
    }

    if (lastIndex < text.length) {
        nodes.push(...renderTextWithInlineLinks(text.slice(lastIndex)))
    }

    return nodes
}

const RizalTimelineEvent: TimelineEvent[] = [
    // Early Life and Education
    {
        date: '1861-06-19',
        title: 'Born in Kalamba, Laguna',
        description: 'José Rizal is born on June 19, 1861, in Kalamba, Laguna.',
        category: CATEGORIES[0],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rizal_Shrine_Calamba_2023.jpg/1280px-Rizal_Shrine_Calamba_2023.jpg',
        imageAlt: 'Rizal Shrine, Calamba',
        imageCaption: 'By Tagaaplaya - Self-photographed, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=141508213',
    },
    { 
        date: '1861-06-22', 
        title: 'Baptism', 
        description: 'He was baptized Jose Rizal Mercado at the Catholic of Calamba by the parish priest Rev. Rufino Collantes with Rev. Pedro Casañas as the sponsor.', 
        category: CATEGORIES[0],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Calamba_Church%2C_Laguna%2C_March_2023.jpg/1280px-Calamba_Church%2C_Laguna%2C_March_2023.jpg',
        imageAlt: 'Calamba Church, Laguna',
        imageCaption: 'By Ralff Nestor Nacor - Self-photographed, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129524067',
    },
    { date: '1864', title: 'Learned Alphabet', description: 'He learned the alphabet from his mother, Teodora Alonso Realonda, at the age of three.', category: CATEGORIES[0] },
    { date: '1865', title: "Concepcion's death", description: 'His sister Concepcion died at the age of three. He shed real tears for the first time.', category: CATEGORIES[0] },
    { date: '1865 - 1867', title: 'Informal Education', description: 'His mother taught him how to read and write. Later, his parents employed private tutors (Maestro Celestino, Maestro Lucas Padua, and Leon Monroy) to give him lessons at home. His uncles Manuel and Gregorio also helped shape his physical and intellectual development.', category: CATEGORIES[0] },
    { date: '1868-06-06', title: 'Pilgrimage to Antipolo', description: 'He made a pilgrimage to Antipolo with his father, Francisco Mercado Rizal, to fulfill his mother’s vow made during his difficult delivery.', category: CATEGORIES[0] },
    { 
        date: '1869', title: 'First Poem Written', 
        description: 'Allegedly he wrote his first poem, Sa Aking Mga Kabata ("To my fellow Children"), when he was only eight years old.\n\nThe oldest known publication of the poem Sa Aking Mga Kabata appears in Kun sino ang kumathâ ng̃ "Florante" (1906) by Hermenigildo Cruz.\n\nScholars like Nilo Ocampo, Ambeth Ocampo and National Artist for Literature Virgilio S. Almario had questioned this work as a Rizal poem citing evidence of spellings that didn’t exist in Rizal’s time (the use of the “k” in the Tagalog text) and ideas (like the word “kalayaan”) that Rizal didn’t know about until he was 20 years old. And, unlike Rizal’s other poems, this one didn’t have an original draft. Both Almario and Ocampo concluded that the poem may have been the work of two well-known Tagalog writers, Hermenigildo Cruz (who first published it in 1906) or Gabriel Beato Francisco (who allegedly discovered it), who then passed it off as a Rizal work.\n\nhttps://mb.com.ph/2020/09/17/prof-ambeth-ocampo-on-rizal-and-fake-news/\n\nhttps://opinion.inquirer.net/115421/patron-saint-fake-news', 
        category: CATEGORIES[0],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg/960px-Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg',
        imageAlt: 'Sa aking mga kabata',
        imageCaption: "By Hermenegildo Cruz - Kun sino ang kumathâ ng̃ 'Florante': kasaysayan ng̃ búhay ni Francisco Baltazar at pag-uulat nang kanyang karunung̃a't kadakilaan (1906), Public Domain, https://commons.wikimedia.org/w/index.php?curid=20336619",
    
    },
    { date: '1869', title: 'Early Education in Biñan', description: 'He received typical schooling for an ilustrado son (reading, writing, arithmetic, and religion) under a strict and rigid system.', category: CATEGORIES[0] },
    { date: '1869-06', title: 'Left Calamba for Biñan', description: 'One Sunday afternoon, accompanied by his brother Paciano, Jose left Calamba for Biñan after a tearful parting from his family.', category: CATEGORIES[0] },
    { date: '1870', title: 'Studied under Justiniano Cruz', description: 'He studied in the house of a severe disciplinarian teacher named Justiniano Aquino Cruz.', category: CATEGORIES[0] },
    { date: '1872-06-10', title: 'Passed Entrance Examination', description: 'He took the entrance examination at San Juan de Letran College and passed all qualifying tests, entitling him to admission at the Ateneo.', category: CATEGORIES[0] },
    { date: '1872 - 1877', title: 'Studies at the Ateneo', description: 'He studied at the Ateneo and obtained a Bachelor of Arts degree with the highest honors.', category: CATEGORIES[0] },
    { date: '1876-04-01', title: 'Poem: Por la Educacion Recibe Lustre la Patria', description: 'He wrote the poem "Through Education the Motherland receives Light" at age 15.', category: CATEGORIES[0] },
    { date: '1876-04-19', title: 'Poem: Alianza Intima Entre la Religion y La Buena Education', description: 'He wrote the poem "Intimate Alliance between religion and good education".', category: CATEGORIES[0] },
    { date: '1877-03-23', title: 'Graduated Sobre Saliente', description: 'At 16 years old, he graduated and received his Bachelor of Arts degree with highest honors (Sobre Saliente), though he was not the valedictorian.', category: CATEGORIES[0] },
    { date: '1877-04-01', title: 'Studied Philosophy and Letters at UST', description: 'He enrolled at the University of Santo Tomas to study Philosophy and Letters.', category: CATEGORIES[0] },
    { date: '1877 - 1878', title: 'Further Studies at Ateneo', description: 'He simultaneously studied Cosmology, Metaphysics, Theodicy, History of Philosophy, and a vocational course leading to the title of Perito Agrimensor (Expert Surveyor) at the Ateneo.', category: CATEGORIES[0] },
    { date: '1878 - 1879', title: 'Rizal Took Up Medicine', description: 'Rizal took up medicine, enrolling simultaneously in a preparatory medical course and the regular first-year medical course.', category: CATEGORIES[0] },
    { date: '1879', title: 'Literary Contest Winner', description: 'He won first prize for his poem A la Juventud Filipina in a literary contest sponsored by the Liceo Artistico Literario de Manila.', category: CATEGORIES[0] },
    { date: '1880', title: 'El Consejo de los Dioses Won First Prize', description: 'At 19, he won first prize in a Manila literary contest with his masterpiece essay: El Consejo de los Dioses (The Council of Gods). He also wrote the play Junto Al Pasig this year.', category: CATEGORIES[0] },

    // First Travel to Europe and Propaganda Work
    { date: '1882', title: 'Joined Circulo Hispano-Filipino', description: 'Rizal joined the Circulo Hispano-Filipino and wrote "Me Piden Versos" (They Ask Me for Verses) as requested by the society\'s members.', category: CATEGORIES[1] },
    { date: '1882-05-01', title: 'Left Calamba for Manila', description: 'He left Calamba by carromata, reaching Manila after 10 hours of travel.', category: CATEGORIES[1] },
    { date: '1882-05-03', title: 'Left Manila for Spain', description: 'He departed for Singapore on board the Spanish steamer Salvadora to complete his university studies in Spain and improve his knowledge.', category: CATEGORIES[1] },
    { date: '1882-05-09', title: 'Two-day Sightseeing at Singapore', description: 'The ship docked at Singapore, and he spent two days visiting the Botanical Garden, Buddhist temples, the shopping district, and the statue of Sir Thomas Stamford Raffles.', category: CATEGORIES[1] },
    { date: '1882-05-11', title: 'Left for Europe', description: 'He left for Europe by boarding another ship, the Djemnah.', category: CATEGORIES[1] },
    { date: '1882-05-18', title: 'First Time Seeing the Coast of Africa', description: 'The steamer docked at Colombo, Ceylon, then crossed the Indian Ocean to Cape Guardafui in Africa (the first time he saw Africa).', category: CATEGORIES[1] },
    { date: '1882-06-02', title: 'Arrived in the City of Suez', description: 'He arrived in the City of Suez, the Red Sea terminal of the Suez Canal.', category: CATEGORIES[1] },
    { date: '1882-06-11', title: 'Reached Naples, Italy', description: 'The ship reached Naples, Italy.', category: CATEGORIES[1] },
    { date: '1882-06-12', title: 'Visited Chateau d\'If & Paris', description: 'The ship docked at the French Harbor of Marseilles where Rizal visited Chateau d\'If (where Dante, hero of the Count of Monte Cristo, was imprisoned). He also went to Paris where he had a chance to contact Masonry.', category: CATEGORIES[1] },
    { date: '1882-06-16', title: 'Arrived at Barcelona, Spain', description: 'He finally arrived in Barcelona, Spain.', category: CATEGORIES[1] },
    { date: '1882-08-20', title: 'First Essay Published', description: 'His first essay, El Amor Patrio, was published in the Diariong Tagalog under the name "Laong Laan".', category: CATEGORIES[1] },
    { date: '1882-11-03', title: 'Enrolled in Medicine in Madrid', description: 'He enrolled in Medicine at the Universidad Central de Madrid.', category: CATEGORIES[1] },
    { date: '1884-06-21', title: 'Awarded Licentiate in Medicine', description: 'Rizal completed his medical course and was awarded the degree of Licentiate in Medicine by the Universidad Central de Madrid.', category: CATEGORIES[1] },
    { date: '1884-06-25', title: 'Brindis Speech', description: 'He delivered his famous brindis speech honoring the award-winning painters Juan Luna and Felix Resurreccion Hidalgo.', category: CATEGORIES[1] },
    { date: '1884 - 1885', title: 'Completed Degree in Doctor of Medicine', description: 'He studied and passed all subjects for a Doctor of Medicine. However, he did not present the required thesis or pay the fees, so the diploma was not awarded at the time.', category: CATEGORIES[1] },
    { date: '1885', title: 'Licentiate in Philosophy and Letters', description: 'He received his licentiate in philosophy and letters, which entitled him to a university professorship.', category: CATEGORIES[1] },
    { date: '1885-10-01', title: 'Assistant to Dr. Louis de Weckert', description: 'Now a 24-year-old physician, he moved to Paris to study ophthalmology and worked as an assistant to Dr. Louis de Weckert, a leading French ophthalmologist.', category: CATEGORIES[1] },
    { date: '1886', title: 'Rizal Went to Germany', description: 'He became a member of the Chess Player’s Club and worked at the University of Heidelberg Eye Hospital under the direction of Dr. Otto Becker.', category: CATEGORIES[1] },
    { date: '1886-04-22', title: 'Wrote "A Las Flores de Heidelberg"', description: 'Fascinated by the blooming spring flowers (especially the light blue forget-me-not) along the Neckar River, he wrote the poem "A Las Flores de Heidelberg".', category: CATEGORIES[1] },
    { date: '1886-07-31', title: 'Wrote a Letter in German', description: 'Rizal wrote a letter in German to Professor Ferdinand Blumentritt, Director of the Ateneo of Leitmeritz.', category: CATEGORIES[1] },
    { date: '1886-08-06', title: 'Sojourned in Heidelberg', description: 'Rizal was present in Heidelberg during the famous University of Heidelberg\'s fifth centenary celebration.', category: CATEGORIES[1] },
    { date: '1887-02-21', title: 'Noli Me Tangere Was Finished', description: 'His novel Noli Me Tangere was finished and ready for printing, with his friend Maximo Viola agreeing to finance the printing cost.', category: CATEGORIES[1] },
    { date: '1887-03-29', title: 'Noli Me Tangere Copy Given to Viola', description: 'Rizal gave Viola the galley proofs of Noli Me Tangere and a complimentary printed copy bearing a special dedication.', category: CATEGORIES[1] },
    { date: '1887-05-11', title: 'Left Berlin with Viola', description: 'Rizal and Viola left Berlin by train to begin a roaming spree across Europe.', category: CATEGORIES[1] },
    { date: '1887-05-20', title: 'Arrived at Vienna', description: 'Rizal and Viola arrived in the beautiful city of Vienna.', category: CATEGORIES[1] },
    { date: '1887-05-25', title: 'Sights of the Danube River', description: 'Rizal and Viola left Vienna on a riverboat to see the beautiful sights of the Danube river.', category: CATEGORIES[1] },
    { date: '1887-06-27', title: 'The "City of Caesar"', description: 'He reached Rome, the "City of the Caesar", and spent a week there before preparing to return to the Philippines.', category: CATEGORIES[1] },

    // Return to the Philippines and Second Trip Abroad
    { date: '1887-08-05', title: 'Return to Manila', description: 'He arrived in Manila after his first stay in Europe.', category: CATEGORIES[2] },
    { date: '1887-10-01', title: 'The Second Novel Begun', description: 'Rizal began writing his second novel while practicing medicine back in Calamba.', category: CATEGORIES[2] },
    { date: '1888-02-03', title: 'Second Departure', description: 'He secretly departed the Philippines after a six-month stay due to threats from the Noli controversy and the Kalamba agrarian dispute.', category: CATEGORIES[2] },
    { date: '1888', title: 'Changes & Corrections', description: 'He made some changes in the plot of his second novel and corrected several chapters.', category: CATEGORIES[2] },
    { date: '1889-02-01', title: 'Pamphlet - "The Vision of Fr. Rodriguez"', description: 'His pamphlet "The Vision of Fr. Rodriguez", written under the pen name "Dimasalang", was published in Barcelona to answer the friars’ attack on the Noli.', category: CATEGORIES[2] },
    { date: '1889-02-22', title: 'Letter to the Women of Malolos', description: 'He wrote a letter congratulating the young women of Malolos for their courageous behavior.', category: CATEGORIES[2] },
    { date: '1889-09-30', title: 'The Philippines, a Century Hence Published', description: 'Rizal’s essay, "The Philippines, a Century Hence", was published in La Solidaridad in four series (running until January 31, 1890).', category: CATEGORIES[2] },
    { date: '1889-12-31', title: 'La Solidaridad Organized', description: 'The La Solidaridad society was organized in Barcelona with Rizal chosen as honorary president.', category: CATEGORIES[2] },
    { date: '1890', title: 'Sucesos de las Islas Filipinas Published', description: 'His annotated edition of Antonio de Morga\'s Sucesos de las Islas Filipinas was published.', category: CATEGORIES[2] },
    { date: '1890-11-15', title: 'Master of Masons', description: 'Rizal became a Master Mason in Lodge Solidaridad.', category: CATEGORIES[2] },
    { date: '1891-03-29', title: 'More Chapters Finished', description: 'He wrote more chapters of his second novel in Paris and Madrid and finally finished the manuscript.', category: CATEGORIES[2] },
    { date: '1891-07-05', title: 'Left Brussels for Ghent', description: 'Rizal left Brussels for Ghent, a famous university city in Belgium.', category: CATEGORIES[2] },
    { date: '1891-09-18', title: 'Second Novel Came Off Press', description: 'El Filibusterismo came off the press. He donated the original manuscript and an autographed printed copy to Valentin Ventura, who helped finance it.', category: CATEGORIES[2] },
    { date: '1891-12-23', title: 'Letter to the Governor General', description: 'He wrote a letter to the new governor general offering his services to help heal injustices, but received no reply.', category: CATEGORIES[2] },
    { date: '1892-02-15', title: 'Master Mason in Paris', description: 'He became a Master Mason of Le Grand Orient France in Paris.', category: CATEGORIES[2] },

    // Final Return, Exile, and Execution
    { date: '1892-06-20', title: 'Letters of Farewell', description: 'He wrote two letters, addressed to his parents and to the people, knowing he was taking a huge risk by going home.', category: CATEGORIES[3] },
    { date: '1892-06-26', title: 'Arrival in the Philippines', description: 'He arrived in the Philippines on a Sunday with his sister Lucia.', category: CATEGORIES[3] },
    { date: '1892-07-03', title: 'La Liga Filipina', description: 'He organized the civic organization, La Liga Filipina, at the house of Doroteo Ongjunco. Andres Bonifacio was among the attendees.', category: CATEGORIES[3] },
    { date: '1892-07-06', title: 'Arrested at Malacañang', description: 'He was summoned to Malacañang Palace, charged with bringing subversive leaflets, arrested, and brought to Fort Santiago.', category: CATEGORIES[3] },
    { date: '1892-07-14', title: 'Notified of Deportation', description: 'He was notified that he would be exiled to Dapitan in Mindanao.', category: CATEGORIES[3] },
    { date: '1892-07-17', title: 'Arrival in Dapitan', description: 'He arrived at night in the lonely and desolate town of Dapitan to begin his exile.', category: CATEGORIES[3] },
    { date: '1893-08-28', title: 'Exile in Dapitan', description: 'Rizal’s exile in Dapitan, Zamboanga, was one of the most lonesome and sorrowful periods of his life, exacerbated by missing his friends and family, and the death of Leonor Rivera.', category: CATEGORIES[3] },
    { date: '1894', title: 'First Letter to Governor General Blanco', description: 'He wrote to Governor General Ramon Blanco seeking his pardon.', category: CATEGORIES[3] },
    { date: '1895', title: 'Second Letter to Governor General Blanco', description: 'He wrote a second letter asking for his release and a review of his case, or volunteering to serve as a surgeon in the Spanish army in Cuba.', category: CATEGORIES[3] },
    { date: '1896-06-21', title: 'Visit from Dr. Pio Valenzuela', description: 'Dr. Pio Valenzuela visited him in Dapitan to inform him about the Katipunan. Rizal vigorously objected to a premature revolution.', category: CATEGORIES[3] },
    { date: '1896-07-30', title: 'Request to go to Cuba Approved', description: 'The long-awaited answer of the Governor approving his request to go to Cuba finally arrived.', category: CATEGORIES[3] },
    { date: '1896-09-03', title: 'Departure for Barcelona', description: 'He left for Barcelona on board the Isla de Panay, but was later notified of his arrest and confined to his cabin.', category: CATEGORIES[3] },
    { date: '1896-10-06', title: 'Transferred to ss Colon', description: 'After a brief stay at cell no. 11 at Montjuich castle, he was brought to the ss Colon bound for Manila.', category: CATEGORIES[3] },
    { date: '1896-11-03', title: 'Arrival at Fort Santiago', description: 'The ss Colon reached Manila and Rizal was brought directly to Fort Santiago under heavy guard.', category: CATEGORIES[3] },
    { date: '1896-11-20', title: 'Preliminary Investigation Begins', description: 'The farcical preliminary investigation began, subjecting him to a two-day inquisitorial interrogation.', category: CATEGORIES[3] },
    { date: '1896-12-23', title: 'Death Sentence Read', description: 'The death sentence was read to Rizal. He refused to sign the notification but was forced to by law.', category: CATEGORIES[3] },
    { date: '1896-12-26', title: 'Trial Before the Military Court', description: 'Rizal was tried before the military court under the supervision of Judge Advocate General Nicolas de la Peña on the grounds of treason, sedition, and formation of illegal associations.', category: CATEGORIES[3] },
    { date: '1896-12-29', title: 'Death Sentence Notification', description: 'He was officially notified of his death sentence rendered by the Spanish military court and wrote his last letters to friends and family.', category: CATEGORIES[3] },
    { date: '1896-12-30', title: 'Rizal\'s Execution', description: 'After confessing, receiving Holy Communion, and briefly marrying Josephine Bracken at 5:00 AM, he was executed by firing squad at sunrise.', category: CATEGORIES[3] },
]

const Timeline: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeTab, setActiveTab] = useState(CATEGORIES[0])
    const [hoveredEventKey, setHoveredEventKey] = useState<string | null>(null)
    const [showScrollToTop, setShowScrollToTop] = useState(false)
    const [backgroundColumnCount, setBackgroundColumnCount] = useState(() =>
        typeof window === 'undefined' ? 7 : getTimelineBackgroundColumnCount(window.innerWidth),
    )

    useEffect(() => {
        const handleResize = () => {
            setBackgroundColumnCount(getTimelineBackgroundColumnCount(window.innerWidth))
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 280)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const backgroundColumns = useMemo(() => {
        const columns = Array.from({ length: backgroundColumnCount }, () => [] as string[])
        for (let index = 0; index < TIMELINE_BACKGROUND_TILES.length; index += 1) {
            columns[index % backgroundColumnCount].push(TIMELINE_BACKGROUND_TILES[index])
        }
        return columns
    }, [backgroundColumnCount])

    useEffect(() => {
        const tabSlug = searchParams.get(TAB_PARAM)
        if (!tabSlug) {
            setActiveTab((current) => (current === CATEGORIES[0] ? current : CATEGORIES[0]))
            return
        }

        const categoryFromSlug = TAB_SLUG_TO_CATEGORY[tabSlug]
        if (!categoryFromSlug) {
            setActiveTab((current) => (current === CATEGORIES[0] ? current : CATEGORIES[0]))

            const nextSearchParams = new URLSearchParams(searchParams)
            nextSearchParams.delete(TAB_PARAM)
            setSearchParams(nextSearchParams, { replace: true })
            return
        }

        setActiveTab((current) => (current === categoryFromSlug ? current : categoryFromSlug))
    }, [searchParams, setSearchParams])

    const handleTabClick = (category: string) => {
        setActiveTab(category)
        const slug = categoryToTabSlug(category)
        if (slug) {
            setSearchParams({ [TAB_PARAM]: slug }, { replace: true })
        } else {
            setSearchParams({}, { replace: true })
        }
    }

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const filteredEvents = RizalTimelineEvent.filter((e) => e.category === activeTab)

    return (
        <section className="relative overflow-hidden py-16">
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                aria-hidden="true"
            >
                <div
                    className="grid h-full w-full gap-2 px-3 py-0"
                    style={{ gridTemplateColumns: `repeat(${backgroundColumnCount}, minmax(0, 1fr))` }}
                >
                    {backgroundColumns.map((column, columnIndex) => (
                        <div key={`timeline-background-column-${columnIndex}`} className="space-y-2">
                            {column.map((src, tileIndex) => (
                                <div
                                    key={`${src}-${columnIndex}-${tileIndex}`}
                                    className="overflow-hidden rounded-md border border-[#A72703]/10 bg-white/30"
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        className="block h-auto w-full"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-[#FFF8F5]/30" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <header className="mb-10 rounded-xl border border-[#A72703]/15 bg-white px-4 py-4 text-center sm:px-6">
                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 text-lg font-semibold uppercase bebas-neue-regular">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => handleTabClick(cat)}
                                className={`flex w-full min-h-16 items-baseline justify-center px-2 py-2 uppercase transition-colors duration-300 ${
                                    activeTab === cat
                                        ? 'text-[#A72703]'
                                        : 'text-[#363636] hover:text-[#A72703]'
                                }`}
                            >
                                <span
                                    aria-current={activeTab === cat ? 'page' : undefined}
                                    className="animated-underline inline-flex h-12 sm:h-14 max-w-full flex-col justify-end text-center leading-tight"
                                >
                                    {cat === 'Early Life and Education' ? (
                                        <>
                                            <span className="block">Early Life and</span>
                                            <span className="block">Education</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="block">&nbsp;</span>
                                            <span className="block">{cat}</span>
                                        </>
                                    )}
                                </span>
                            </button>
                        ))}
                    </div>
                </header>

                <div className="relative mt-12">
                    <div
                        className="pointer-events-none absolute left-4 top-0 h-full w-px bg-[#A72703]/25 md:left-1/2 md:-translate-x-1/2"
                        aria-hidden="true"
                    />

                    <ol className="pl-10 sm:pl-12 md:pl-0">
                        {filteredEvents.map((event, index, arr) => {
                            const isLeft = index % 2 === 0
                            const marginTop = index === 0
                                ? 0
                                : spacingPxFromDateDiff(arr[index - 1]?.date, event.date)
                            const imageHref = event.imageCaption ? extractFirstUrl(event.imageCaption) : null
							const eventKey = `${event.category}-${event.date}-${event.title}`
                            return (
                                <li
                                    key={eventKey}
                                    className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12"
                                    style={{
                                        marginTop: index === 0 ? 0 : marginTop,
                                        zIndex: hoveredEventKey === eventKey ? 9999 : index,
                                    }}
                                    onMouseEnter={() => setHoveredEventKey(eventKey)}
                                    onMouseLeave={() => setHoveredEventKey((current) => (current === eventKey ? null : current))}
                                >
                                    <div
                                        className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#A72703] ring-4 ring-white md:left-1/2 md:-translate-x-1/2"
                                        aria-hidden="true"
                                    />

                                    <div
                                        className={
                                            isLeft
                                                ? 'md:col-start-1 md:justify-self-end'
                                                : 'md:col-start-2 md:justify-self-start'
                                        }
                                    >
                                        <div className="group relative rounded-xl border border-[#A72703]/15 bg-[#FFF8F5] p-5 sm:p-6 md:max-w-md">
                                            <div className="atkinson-hyperlegible-mono-regular text-xs font-semibold uppercase tracking-[.19em] text-[#A72703] sm:text-sm">
                                                {formatEventDate(event.date)}
                                            </div>
                                            <h3 className="bebas-neue-regular mt-2 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
                                                {event.title}
                                            </h3>
                                            <div className="mt-3 space-y-3">
                                                {splitDescriptionIntoParagraphs(event.description).map((paragraph, paragraphIndex) => (
                                                    <p
                                                        key={paragraphIndex}
                                                        className="atkinson-hyperlegible-mono-regular text-sm leading-relaxed text-[#3D2A1C] sm:text-base"
                                                    >
																			{renderTextWithLinks(paragraph)}
                                                    </p>
                                                ))}
                                            </div>

                                            {event.imageUrl && (
                                                <div
                                                    className={`pointer-events-none absolute left-0 top-full w-full pt-3 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 md:top-0 md:w-72 md:pt-0 ${
                                                        isLeft
                                                            ? 'md:left-auto md:right-full md:pr-4'
                                                            : 'md:left-full md:pl-4'
                                                    }`}
                                                >
                                                    <div className="w-full overflow-hidden rounded-xl border border-[#A72703]/15 bg-white">
                                                        {imageHref ? (
                                                            <a
                                                                href={imageHref}
                                                                className="block"
                                                                aria-label={`Open source for ${event.title}`}
                                                            >
                                                                <img
                                                                    src={event.imageUrl}
                                                                    alt={event.imageAlt ?? event.title}
                                                                    loading="lazy"
                                                                    className="w-full cursor-pointer bg-white object-cover"
                                                                />
                                                            </a>
                                                        ) : (
                                                            <img
                                                                src={event.imageUrl}
                                                                alt={event.imageAlt ?? event.title}
                                                                loading="lazy"
                                                                className="w-full bg-white object-cover"
                                                            />
                                                        )}

                                                        {event.imageCaption && (
                                                            <div className="border-t border-[#A72703]/15 p-3">
                                                                <p className="atkinson-hyperlegible-mono-regular text-left text-xs font-medium text-[#363636]">
                                                                    {event.imageCaption}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>

            <button
                type="button"
                aria-label="Scroll to top"
                onClick={handleScrollToTop}
                className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#A72703] text-2xl font-bold leading-none text-white shadow-lg transition-all duration-300 hover:bg-[#8F2303] focus:outline-none focus:ring-2 focus:ring-[#A72703]/35 focus:ring-offset-2 ${
                    showScrollToTop
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-2 opacity-0'
                }`}
            >
                ^
            </button>
        </section>
    )
}

export default Timeline