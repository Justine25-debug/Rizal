import React, { useEffect, useState } from 'react'

const Poetry: React.FC = () => {
	useEffect(() => {
		document.title = 'Poetry - José Rizal'
	}, [])

	const [isKabataExpanded, setIsKabataExpanded] = useState(false)
	const [isCombateExpanded, setIsCombateExpanded] = useState(false)
	const [isHeroismoExpanded, setIsHeroismoExpanded] = useState(false)
	const [isHeidelbergExpanded, setIsHeidelbergExpanded] = useState(false)
	const [isTrabajoExpanded, setIsTrabajoExpanded] = useState(false)
	const [isCarcineroExpanded, setIsCarcineroExpanded] = useState(false)
	const [isViajeroExpanded, setIsViajeroExpanded] = useState(false)
	const [isPorEducacionExpanded, setIsPorEducacionExpanded] = useState(false)
	const [isJuventudExpanded, setIsJuventudExpanded] = useState(false)
	const [isALaEducacionExpanded, setIsALaEducacionExpanded] = useState(false)
	const [isMePidenExpanded, setIsMePidenExpanded] = useState(false)
	const [isMariaClaraExpanded, setIsMariaClaraExpanded] = useState(false)
	const [isAMiMusaExpanded, setIsAMiMusaExpanded] = useState(false)
	const [isMiRetiroExpanded, setIsMiRetiroExpanded] = useState(false)
	const [isUltimoAdiosExpanded, setIsUltimoAdiosExpanded] = useState(false)
	const [isAlianzaExpanded, setIsAlianzaExpanded] = useState(false)

	return (
		<main className="">
			<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
					Poetry
				</h1>
				<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

				<div className="mt-10 flex flex-wrap items-start justify-center gap-6">
					{isKabataExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Sa Aking Mga Kabata
								</h2>
								<button
									type="button"
									onClick={() => setIsKabataExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<figure className="mx-auto w-full max-w-[20rem] md:float-right md:mb-4 md:ml-6 md:mt-1">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg/960px-Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg"
									alt="Sa Aking Mga Kabata from Hermenegildo Cruz's 1906 book"
									className="block h-auto w-full border border-[#A72703]/20"
								/>
								<figcaption className="atkinson-hyperlegible-mono-regular mt-2 w-full text-xs leading-relaxed text-[#3D2A1C]">
									By Hermenegildo Cruz - Kun sino ang kumathâ ng̃ &quot;Florante&quot;: kasaysayan ng̃ búhay ni Francisco Baltazar at pag-uulat nang kanyang karunung̃a&apos;t kadakilaan (1906), Public Domain,
									<a
										href="https://commons.wikimedia.org/w/index.php?curid=20336619"
										target="_blank"
										rel="noopener noreferrer"
										className="ml-1 text-[#A72703] underline underline-offset-2 hover:opacity-80"
									>
										https://commons.wikimedia.org/w/index.php?curid=20336619
									</a>
								</figcaption>
							</figure>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									&quot;Sa Aking Mga Kabata&quot; is a Tagalog lyric poem traditionally taught as the first poem written by Philippine national hero José Rizal. It is widely known for the oft-quoted line, &quot;Ang hindi magmahal sa kanyang salitâ / Mahigit sa hayop at malansáng isdâ.&quot;
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Traditional Attribution and Themes
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Traditional educational materials describe this as a precocious poem composed by Rizal at around eight years old, often presented alongside accounts of his early literary development under the guidance of his mother.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Within that traditional framing, the poem is interpreted as an expression of early patriotism, idealism, and concern for the native tongue. The verses praise language as noble and worthy of honor, and classroom discussions often classify the work within Rizal&apos;s supposed initial poetic stage.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Authorship Controversy
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Despite its long-standing popularity in schools, modern historians and literary experts have extensively challenged and debunked the attribution to Rizal. Among the scholars frequently cited are National Artist Virgilio S. Almario and historian Prof. Ambeth Ocampo.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Advanced Vocabulary:</strong> Critics note that terms such as <em> kalayaan</em> and <em>himpapawid</em> suggest linguistic maturity unlikely for an eight-year-old in 1869.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Conceptual Maturity:</strong> The piece appears to require a deeper grasp of colonial social conditions and ideas such as <em>sanlang kalayaan</em>.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Comparative Linguistic Awareness:</strong> The verses imply philological knowledge in comparing Tagalog with Latin and Spanish that Rizal likely had not yet developed at that age.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context as Historical “Fake News”
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Many historians group this disputed attribution with other enduring Philippine historical myths and hoaxes, including the Code of Kalantiaw, the legend of Princess Urduja, and fabricated pre-Spanish materials linked to forger Jose E. Marco. In this framing, the case of &quot;Sa Aking Mga Kabata&quot; is presented as an early and influential example of historical misinformation in popular education.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsKabataExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col justify-between rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Sa Aking Mga Kabata card</span>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg/960px-Sa_Aking_Mga_Kabata_%28in_Herminigildo_Cruz%2C_Kun_Sino_ang_Kumatha_ng_Florante%2C_1906%29.jpg"
								alt="Sa Aking Mga Kabata"
								className="mx-auto block h-52 w-full max-w-36 border border-[#A72703]/20 object-cover object-top"
							/>
							<div className="mt-3 space-y-1 text-center leading-tight">
								<p className="atkinson-hyperlegible-mono-regular text-[11px] text-[#3D2A1C] sm:text-xs">
									Composed: c. 1869
								</p>
								<p className="atkinson-hyperlegible-mono-regular text-[11px] text-[#3D2A1C] sm:text-xs">
									Source: 1906
								</p>
							</div>
						</button>
					)}

					{isAlianzaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Alianza Intima Entre la Religion y la Buena Educacion
								</h2>
								<button
									type="button"
									onClick={() => setIsAlianzaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Alianza Intima Entre la Religion y la Buena Educacion</i> (English: <i>Intimate Alliance Between Religion and Good Education</i>) is a poem by José Rizal written during his student years at the Ateneo Municipal de Manila. The piece reflects his early views on the relationship between faith and learning.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Historical Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The poem was composed on April 19, 1876, while Rizal was studying for his Bachelor of Arts degree at the Ateneo. It was later found among several poems in a notebook from his student period, a time often associated with growing academic freedom and the refinement of his independent philosophical thought under Jesuit mentorship.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The central argument of the poem is the essential alliance of religion and education in forming a morally grounded and enlightened individual.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Discovery of Truth:</strong> Rizal presents faith, love of God, and the search for truth as outcomes of disciplined study and cultivated reason.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Interdependence:</strong> The poem asserts that religion is integral to the proper education of a person.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Character Formation:</strong> It also serves as an early declaration that character education is essential to helping save the country.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Significance in Rizal&apos;s Ideology
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									This poem is commonly grouped under Rizal&apos;s adolescent poetry (1874–1881), a stage shaped by engagement with classical philosophy, mythology, and religious thought. Alongside pieces such as <i>Por la Educacion Recibe Lustre la Patria</i>, it reflects his early conviction that enlightenment and virtue must work together to bring honor and progress to society.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsAlianzaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Alianza Intima card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Alianza Intima Entre la Religion y la Buena Educacion
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Composed: April 19, 1876
							</p>
						</button>
					)}

					{isCombateExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									El Combate: Urbiztondo, Terror de Jolo
								</h2>
								<button
									type="button"
									onClick={() => setIsCombateExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>El Combate: Urbiztondo, Terror de Jolo</i> (English:
									<i> The Confrontation: Urbiztondo, Terror of Jolo</i>) is a poem by
									José Rizal dated December 5, 1875. It functions as both a chronicle and
									critique of a specific Spanish military campaign during the colonial era in
									the Philippines.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Historical Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The poem centers on the Spanish conquest of Jolo in the southern
									Philippines. It describes military action against the local Muslim ruler,
									presented in accounts as both elusive and difficult to defeat.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Content and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Heroic and Humanistic Values:</strong> The poem reflects Rizal&apos;s
										interest in heroic virtues alongside humanistic attitudes.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Character Education:</strong> As in other early works, Rizal links
										national progress to mass education and moral character formation.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Youth Involvement:</strong> The piece also reveals his early concern
										for youth participation in the affairs of the nation.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Literary critics commonly place this poem in Rizal&apos;s initial stage of
									precocious poetry. Many works from this phase are associated with the early
									influence of his mother, Teodora Alonso.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsCombateExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand El Combate card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								El Combate: Urbiztondo, Terror de Jolo
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Dated: December 5, 1875
							</p>
						</button>
					)}

					{isHeroismoExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									El Heroismo: Canto Epico
								</h2>
								<button
									type="button"
									onClick={() => setIsHeroismoExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>El Heroismo: Canto Epico</i> (English: <i>Heroism: An Epic Song</i>) is
									a manuscript written by José Rizal. Long believed lost, the manuscript was
									recovered in 1946 from the Rizaliana section of the National Library
									collection.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Content and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Historical Subject:</strong> The recovered stanzas are framed as an
										apostrophe to the mythological muse and testify to the courage and faith
										of Christopher Columbus as he carried the Spanish banner beyond Granada.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Heroic Virtues:</strong> The piece reflects Rizal&apos;s early
										preoccupation with heroic and humanistic values.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Character Development:</strong> Through this epic song, Rizal
										highlights attitudes and values he believed his countrymen should
										develop.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Literary Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The poem is commonly categorized under Rizal&apos;s initial stage of
									precocious poetry, a period often associated with the influence of his
									mother, Teodora Alonso.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsHeroismoExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand El Heroismo card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								El Heroismo: Canto Epico
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Recovered manuscript: 1946
							</p>
						</button>
					)}

					{isHeidelbergExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A las Flores de Heidelberg
								</h2>
								<button
									type="button"
									onClick={() => setIsHeidelbergExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A las Flores de Heidelberg</i> (English: <i>To the Flowers of Heidelberg</i>)
									is a poem written by José Rizal on April 22, 1886. It is often characterized
									as a poem of remembrance and a poem of the motherland.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Inspiration and Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal composed the poem during his stay in Germany, inspired by afternoon
									reflections beside the Neckar River in Heidelberg, a place where he sought
									quiet and solace while pursuing intense academic and political work.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Nationalism and Remembrance:</strong> The poem is widely read as a
										major expression of love for the motherland and the enduring force of
										memory.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Homesickness:</strong> It captures Rizal&apos;s recurring homesickness
										while living abroad.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Ideology:</strong> The poem belongs to Rizal&apos;s mature phase, where
										nationalism becomes a developed ideology and sustained passion.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Literary Significance
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Critics often regard <i>A las Flores de Heidelberg</i> as one of Rizal&apos;s
									masterpieces for its sublime profundity and rhythm, and they frequently
									group it with other mature-period works such as <i>Me Piden Versos</i> and
									<i>Mi Retiro</i>.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsHeidelbergExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A las Flores de Heidelberg card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A las Flores de Heidelberg
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Written: April 22, 1886
							</p>
						</button>
					)}

					{isTrabajoExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Himno al Trabajo
								</h2>
								<button
									type="button"
									onClick={() => setIsTrabajoExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Himno al Trabajo</i> (English: <i>Hymn to Labor</i>) is a poem by José
									Rizal composed to commemorate the elevation of Lipa from a town to a city.
									The work is often read as a broad declaration of his patriotism.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Dignity of Labor:</strong> Rizal frames labor and industry as
										worthy pursuits, challenging Filipinos to find dignity in productive
										work.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>National Progress:</strong> The poem stresses that each citizen has
										a distinct role in advancing the country.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Youthful Commitment:</strong> The youth, described as the
										&quot;fair hope of the motherland,&quot; are urged to break the chains of
										ignorance through their efforts.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context within Rizal&apos;s Work
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Critics classify this poem among Rizal&apos;s mature nationalist works, a
									phase in which nationalism is expressed not merely as sentiment but as a
									passion and a practical ideology.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsTrabajoExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Himno al Trabajo card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Himno al Trabajo
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Commemorative civic poem
							</p>
						</button>
					)}

					{isCarcineroExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A Don Ricardo Carcinero
								</h2>
								<button
									type="button"
									onClick={() => setIsCarcineroExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A Don Ricardo Carcinero</i> is a poem written by José Rizal on August 26,
									1892, during his exile in Dapitan. It is notable for its focus on community
									development and Rizal&apos;s relationship with his guardian, Captain Ricardo
									Carcinero.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Inspiration
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal composed the poem as a salutation for Carcinero&apos;s feast day, which also
									coincided with the first anniversary of his governorship in the Philippines.
									Unlike many Spanish officials, Carcinero allowed Rizal broad latitude to apply
									his ingenuity for local improvement, provided he remained in Dapitan.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Infrastructure and Progress:</strong> Rizal praises Carcinero&apos;s
										attention to natural and human resources, especially projects involving
										roads, bridges, agricultural improvements, and schools.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Social Transformation:</strong> The poem imagines that material
										progress can improve civic character, reduce hunger and insecurity, and
										help overcome indolence.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Paternal Governance:</strong> Rizal appeals for Carcinero to
										continue his paternal concern and give citizens time to absorb and respond
										to reforms.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Historical Significance
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									During Rizal&apos;s 1896 treason trial, opponents reportedly considered the poem
									powerful enough to be included as documentary testimony in support of the
									charges.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsCarcineroExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A Don Ricardo Carcinero card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A Don Ricardo Carcinero
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Written: August 26, 1892
							</p>
						</button>
					)}

					{isViajeroExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Canto del Viajero
								</h2>
								<button
									type="button"
									onClick={() => setIsViajeroExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Canto del Viajero</i> (English: <i>Song of the Traveler</i>) is a poem
									composed by José Rizal in 1896 after he was informed that he could once
									again go abroad.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Imagery
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Self-Depiction:</strong> Rizal compares himself to a leaf carried
										wherever the wind takes it.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Disillusionment:</strong> The poem reflects disappointment over the
										pace of social regeneration among Filipinos.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Tranquility in Death:</strong> Feeling deserted, he voices a wish
										for refuge in the calm of death.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Hope for Emancipation:</strong> Despite personal sorrow, he still
										prays that his people may eventually attain freedom and happiness.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The poem is classified within Rizal&apos;s period of poetic maturity, when
									nationalism in his writing becomes a developed ideology and passion rather
									than merely sentiment.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsViajeroExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Canto del Viajero card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Canto del Viajero
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Composed: 1896
							</p>
						</button>
					)}

					{isPorEducacionExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Por la Educacion Recibe Lustre la Patria
								</h2>
								<button
									type="button"
									onClick={() => setIsPorEducacionExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Por la Educacion Recibe Lustre la Patria</i> (English: <i>Through
									Education the Motherland Receives Light</i>) is a poem written by José
									Rizal on April 1, 1876, when he was about fifteen years old. It belongs to
									his adolescent poetry stage (1874–1881).
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Benefits to the Nation:</strong> Rizal highlights the noble
										benefits of an enlightened citizenry, including peace, youthful
										usefulness, and determination in governance.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Social Antidote:</strong> Education is presented as a vital
										counterforce to crime and vice.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Humanization:</strong> The poem suggests that education
										humanizes people and leads toward truth, goodness, and honor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Sacrifice and Reward:</strong> Rizal acknowledges the sacrifices
										required for learning while stressing its long-term rewards in virtue and
										quality of life.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Style and Tone
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Known for grandiloquence and a sublime tone, the poem urges Filipinos to
									seek enlightenment and reflects Rizal&apos;s early conviction that character
									education is essential to national salvation.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsPorEducacionExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Por la Educacion card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Por la Educacion Recibe Lustre la Patria
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Written: April 1, 1876
							</p>
						</button>
					)}

					{isJuventudExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A la Juventud Filipina
								</h2>
								<button
									type="button"
									onClick={() => setIsJuventudExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A la Juventud Filipina</i> (English: <i>To the Philippine Youth</i>) is
									a prize-winning poem written by José Rizal in 1879 while he was a student
									at the University of Santo Tomas. It is historically noted as the first
									recorded use of the word &quot;Filipino&quot; to refer to native inhabitants of the
									Philippines rather than Spaniards born in the islands.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									History and Recognition
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Literary Contest:</strong> Rizal submitted the poem to a contest
										for mestizos and Filipinos sponsored by the Liceo Artistico Literario de
										Manila.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Award:</strong> It won first prize—a silver feather-shaped pen with
										a gold ribbon.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Impact:</strong> The result affirmed Rizal&apos;s belief that a native
										indio could write as well as, or better than, a Spaniard.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Call to Action:</strong> The poem urges the youth to awaken from
										lethargy and recognize the nobility of youth.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>&quot;Fair Hope of the Motherland&quot;:</strong> Young people are challenged
										to break the chains of ignorance.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Nationalism:</strong> The work condenses Rizal&apos;s early nationalist
										convictions and civic attitudes.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Critics usually classify <i>A la Juventud Filipina</i> under Rizal&apos;s
									poetic maturity, where nationalism develops from sentiment into a
									functional ideology aimed at social betterment.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsJuventudExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A la Juventud Filipina card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A la Juventud Filipina
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Prize-winning poem, 1879
							</p>
						</button>
					)}

					{isALaEducacionExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A la Educacion
								</h2>
								<button
									type="button"
									onClick={() => setIsALaEducacionExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A la Educacion</i> (English: <i>To Education</i>) is a poem written by
									José Rizal during his student years at the Ateneo. It belongs to his
									adolescent poetry stage (1874–1881).
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Imagery
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Education as a Goddess:</strong> Rizal personifies learning as an
										inspiring goddess.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>The Lighthouse Metaphor:</strong> Education is compared to a
										lighthouse that guides people toward enlightenment.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Gratitude for Achievement:</strong> The poem acknowledges that
										both personal and national achievements owe much to educational
										foundations.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context within Rizal&apos;s Work
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									This poem is often discussed alongside <i>Alianza Intima Entre la
									Religion y la Buena Educacion</i> and <i>Por la Educacion Recibe Lustre
									la Patria</i> as part of Rizal&apos;s sustained argument that character
									education is essential to national salvation.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsALaEducacionExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A la Educacion card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A la Educacion
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Adolescent poetry (1874–1881)
							</p>
						</button>
					)}

					{isMePidenExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Me Piden Versos
								</h2>
								<button
									type="button"
									onClick={() => setIsMePidenExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Me Piden Versos</i> (English: <i>They Ask Me for Verses</i>) is a poem
									written by José Rizal in 1882. It was composed during a period when he was
									deeply engaged in academic and political work, a time his mother noted that
									his poetic activity had been temporarily set aside.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Occasion:</strong> The poem was first read at a party sponsored by
										the Círculo Hispano-Filipino.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Sentiment:</strong> It carries a recurring homesickness for the
										Philippines.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Nationalist Crusade:</strong> The poem conveys the physical and
										emotional strain Rizal endured in his struggle for freedom.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Literary Significance
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Critics place this poem within Rizal&apos;s poetic maturity, when his writing
									moves from simple sentiment to a developed ideology in which nationalism is
									both virtue and passion.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMePidenExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Me Piden Versos card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Me Piden Versos
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Written: 1882
							</p>
						</button>
					)}

					{isMariaClaraExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Canto De Maria Clara
								</h2>
								<button
									type="button"
									onClick={() => setIsMariaClaraExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Canto De Maria Clara</i> (English: <i>Song of Maria Clara</i>) is a poem
									written by José Rizal in 1887. The verses originally appeared in his first
									novel, <i>Noli Me Tangere</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Patriotism:</strong> The poem is often read as a full declaration
										of Rizal&apos;s enduring commitment to his country.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Emotional Resonance:</strong> It is frequently described as one of
										the most touching and patriotic pieces in the novel.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Musical and Artistic Adaptations
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The verses of <i>Canto De Maria Clara</i> were set to music by Juan
									Hernandez. It is among Rizal&apos;s poems that have been adapted into music,
									dance, and other literary forms.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMariaClaraExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Canto De Maria Clara card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Canto De Maria Clara
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Published in Noli, 1887
							</p>
						</button>
					)}

					{isAMiMusaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A mi Musa
								</h2>
								<button
									type="button"
									onClick={() => setIsAMiMusaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A mi Musa</i> (English: <i>To My Muse</i>) is a poem written by José
									Rizal in 1890. It was composed during a period of professional and
									personal frustration.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Context
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Frustration and Disgust:</strong> The poem expresses Rizal&apos;s
										occasional hesitation to write or sing.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique of Lethargy:</strong> It reflects his disillusionment
										with what he saw as lukewarm efforts among Filipinos in Spain to push
										for reforms from the Spanish government.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Poetic Maturity:</strong> Critics place the work in Rizal&apos;s
										mature phase, where personal aspiration is synthesized into a functional
										nationalist ideology.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsAMiMusaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A mi Musa card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A mi Musa
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Written: 1890
							</p>
						</button>
					)}

					{isMiRetiroExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Mi Retiro
								</h2>
								<button
									type="button"
									onClick={() => setIsMiRetiroExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Mi Retiro</i> (English: <i>My Retreat</i>) is an autobiographical poem
									written by José Rizal during his exile in Dapitan. Literary critics widely
									regard it as one of his masterpieces for its sublime profundity and rhythm.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Structure and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Composition:</strong> The poem consists of 24 stanzas totaling 120
										lines.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Autobiographical Nature:</strong> Its verses offer a poetic account
										of Rizal&apos;s life, reflections, and interior world during isolation.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Nationalism
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Like other mature works, <i>Mi Retiro</i> reaffirms Rizal&apos;s nationalism as
									a cultivated passion and a virtue to be developed.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMiRetiroExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Mi Retiro card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Mi Retiro
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Autobiographical exile poem
							</p>
						</button>
					)}

					{isUltimoAdiosExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Ultimo Adios
								</h2>
								<button
									type="button"
									onClick={() => setIsUltimoAdiosExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Ultimo Adios</i> (English: <i>Last Farewell</i>) is the final poem
									written by José Rizal before his execution in December 1896. It is widely
									regarded as a compact, harmonious restatement of his unwavering patriotism.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									History and Discovery
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Hidden Manuscript:</strong> Originally untitled, the poem was found
										on a paper hidden inside an alcohol burner that Rizal gave to his sister,
										Trinidad, the day before his death.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Date of Composition:</strong> Although often associated with the eve
										of execution, the poem&apos;s polished form suggests a fair copy may have been
										prepared earlier, possibly around December 12, 1896.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Titles:</strong> It has appeared under titles such as
										<i> My Last Thoughts</i> and <i>My Last Farewell</i>.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Significance
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Nationalist Idealism:</strong> The poem is a sublime expression of
										Rizal&apos;s religious idealism and nationalist commitment, crafted to inspire
										his people.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Religious Tone:</strong> It invokes God&apos;s sovereignty and includes
										prayers for human redemption.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Structure:</strong> The work consists of 70 lines, brief yet deeply
										impactful.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsUltimoAdiosExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Ultimo Adios card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Ultimo Adios
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Final poem, December 1896
							</p>
						</button>
					)}
				</div>
			</section>
		</main>
	)
}

export default Poetry
