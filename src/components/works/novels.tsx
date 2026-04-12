import React, { useEffect, useMemo, useState } from 'react'

const Novels: React.FC = () => {
	useEffect(() => {
		document.title = 'Novels - José Rizal'
	}, [])

	const characters = useMemo(
		() => [
			{
				name: 'Juan Crisostomo Ibarra y Magsalin',
				description:
					'The main protagonist, a well-mannered young man who symbolizes the "translated Filipino".',
			},
			{
				name: 'Elias',
				description:
					"Ibarra's mysterious friend who became an outlaw due to severe family misfortunes caused by Don Pedro Eibarramendia, Ibarra's ancestor.",
			},
			{
				name: 'Maria Clara de los Santos',
				description:
					"Ibarra's fiancée and the daughter of Doña Pia Alba and Father Damaso. She is portrayed as a typical 19th-century Filipino woman and symbolizes the Philippines—specifically, the unhappy state of the country as a product of Spanish exploitation.",
			},
			{
				name: 'Father Damaso Verdolagas',
				description:
					"The former Franciscan parish priest of San Diego and the novel's antihero. He is depicted as an uncouth, bigoted, and power-mad individual who personifies depraved evil among the friars.",
			},
			{
				name: 'Tasio (Don Anastacio)',
				description:
					"A scholar considered a fool by the apathetic majority. He reacts coldly to Ibarra's school plans but offers true sympathy and sensible advice.",
			},
			{
				name: 'Capitan Tiago (Don Santiago de los Santos)',
				description:
					'A pretentious Chinese half-breed and rich property owner who tries to imitate Europeans and does not consider himself a native.',
			},
			{
				name: 'Sisa',
				description:
					"Sisa is driven to insanity by the severe suffering and poverty her family endures. She symbolizes the Motherland, Rizal's own mother, and all Filipino women.",
			},
			{
				name: 'Crispin and Basilio',
				description:
					"Sisa's sons. Crispin becomes the fatal target of the parish caretaker's blows and is beaten to death.",
			},
		],
		[],
	)

	const [activeCharacter, setActiveCharacter] = useState(characters[0].name)
	const selectedCharacter = characters.find((character) => character.name === activeCharacter) ?? characters[0]

	const elFiliCharacters = useMemo(
		() => [
			{
				name: 'Simoun',
				description:
					'The disguise of Ibarra, characterized by his tall, lean, deeply tanned appearance, white hair, and black goatee. He employs Machiavellian designs to distort the values of corrupt officials and incite revolution.',
			},
			{
				name: 'Basilio',
				description:
					"The son of the demented Sisa from the first novel. He survives his family's travails to pursue a medical career, supporting himself through servitude to the opium-addicted Capitan Tiago.",
			},
			{
				name: 'Isagani',
				description:
					"A young poet trained at the Ateneo who symbolizes the liberated Filipino youth. His unselfish devotion urges him to save his faithless former sweetheart, Paulita, from the explosion.",
			},
			{
				name: 'Father Florentino',
				description:
					"A distinguished native priest whose serious countenance evinces a soul strengthened by study and meditation. He serves as Rizal's ultimate spokesman in the novel and his portrait of the ideal shepherd.",
			},
			{
				name: 'Cabesang Tales (Matanglawin)',
				description:
					'A victim of agrarian injustice who is driven to outlawry. He uses a locket belonging to his daughter, Juli, to pay Simoun for arms and ammunition.',
			},
			{
				name: 'Paulita Gomez',
				description:
					"The niece of Doña Victorina and Isagani's sweetheart, who displays a frivolous sense of values by marrying the more affluent Juanito Pelaez.",
			},
		],
		[],
	)

	const [activeElFiliCharacter, setActiveElFiliCharacter] = useState(elFiliCharacters[0].name)
	const selectedElFiliCharacter =
		elFiliCharacters.find((character) => character.name === activeElFiliCharacter) ?? elFiliCharacters[0]
	const [isNoliExpanded, setIsNoliExpanded] = useState(false)
	const [isElFiliExpanded, setIsElFiliExpanded] = useState(false)

	return (
		<main className="">
			<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
					Novels
				</h1>
				<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

				<div className="mt-10 flex flex-wrap items-start justify-center gap-6">
					{isNoliExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B]">
									Noli Me Tangere
								</h2>
								<button
									type="button"
									onClick={() => setIsNoliExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>
						<figure className="mx-auto w-full max-w-[18rem] md:float-right md:mb-4 md:ml-6 md:mt-1">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Noli_Me_Tangere.jpg"
								alt="Noli Me Tangere cover"
								className="block h-auto w-full border border-[#A72703]/20"
							/>
							<figcaption className="atkinson-hyperlegible-mono-regular mt-2 w-full text-xs leading-relaxed text-[#3D2A1C]">
								By José Rizal - Unknown source, likely scanned copy of the original book cover, Public
								Domain,
								<a
									href="https://commons.wikimedia.org/w/index.php?curid=2382969"
									target="_blank"
									rel="noopener noreferrer"
									className="ml-1 text-[#A72703] underline underline-offset-2 hover:opacity-80"
								>
									https://commons.wikimedia.org/w/index.php?curid=2382969
								</a>
							</figcaption>
						</figure>
						<div className="space-y-4">
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								Noli Me Tangere (which literally means &quot;touch me not&quot;) is a novel written by Filipino
								nationalist Jose Rizal. The title refers to a wound that is painful even to the
								healer&apos;s touch, causing more agony than relief. It is considered one of the greatest
								Philippine social documents and serves as a constant and inspiring source of
								patriotism. Republic Act 1425, passed by the Congress of the Philippines on June 12,
								1956, made the reading of the novel compulsory in all Philippine colleges and
								universities.
							</p>

							<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
								Publication History
							</h3>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								Rizal finished the first half of the novel in Madrid, continued writing it in Paris,
								and finally completed the manuscript in Germany. He found the cheapest printer in
								Berlin—the Berliner Buchdruckerei-Actien-Gesselschaft, Setzerinnen-Schule de Lette
								Vereins—which charged 300 pesos for 2,000 copies. Rizal&apos;s friend, Maximo Viola, lent
								him the money to finance the printing, and the book was finally released in March
								1887.
							</p>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								Rizal later studied French well enough to translate the novel into the language.
								Additionally, his brother, Paciano, translated the novel into Tagalog.
							</p>

							<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
								Plot Summary
							</h3>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								The story follows Juan Crisostomo Ibarra, the scion of a wealthy family who returns
								home to San Diego after a seven-year education in Switzerland. During his absence,
								his father, Don Rafael Ibarra, was imprisoned for the accidental death of a Spanish
								tax collector and subsequently died in prison. Because Don Rafael had stopped going
								to confession and subscribed to liberal publications, the parish priest, Father
								Damaso, denied him a Christian burial.
							</p>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								Upon his return, Ibarra attempts to establish a progressive school patterned after
								those he saw in Europe. However, he faces skepticism from a local scholar named Tasio
								and disapproval from the new parish priest, Father Salvi, who views the school as a
								threat to his authority. During the laying of the school&apos;s cornerstone, an attempt is
								made on Ibarra&apos;s life, but he is saved by Elias, a mysterious boatman Ibarra had
								previously rescued.
							</p>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								Ibarra is continuously harassed by the friars. At one gathering, he is almost
								provoked to kill Father Damaso after the friar vilifies his dead father, but Ibarra&apos;s
								fiancée, Maria Clara, stays his hand. He is eventually excommunicated but later
								absolved by the Archbishop. Finally, a false rebellion is plotted, and forged
								documents implicate Ibarra as its leader. Ibarra is imprisoned but is rescued once
								again by Elias, who hides him in a banca and rows him to safety under gunfire. Elias
								is wounded and dies, while Ibarra flees the country, leaving the impression that he
								was killed by the civil guard. The distraught Maria Clara refuses to marry a Spaniard
								named Alfonso Linares and instead enters the nunnery of the Poor Clares.
							</p>

							<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
								Main Characters
							</h3>
							<div className="space-y-4">
								<div className="flex flex-wrap justify-center gap-2">
									{characters.map((character) => {
										const isActive = character.name === activeCharacter
										return (
											<button
												key={character.name}
												type="button"
												onClick={() => setActiveCharacter(character.name)}
												className={`rounded border px-3 py-2 text-left text-sm transition-colors sm:text-base ${
													isActive
														? 'border-[#A72703] bg-[#A72703] text-white'
														: 'border-[#A72703]/30 bg-[#FFF8F5] text-[#3D2A1C] hover:bg-[#FDEEE7]'
												}`}
											>
												{character.name}
											</button>
										)
									})}
								</div>

								<div className="rounded border border-[#A72703]/20 bg-[#FFF8F5] p-4 sm:p-5">
									<p className="atkinson-hyperlegible-mono-regular text-center leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>{selectedCharacter.name}:</strong> {selectedCharacter.description}
									</p>
								</div>
							</div>

							<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
								Themes
							</h3>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								The novel courageously criticizes Philippine life during the 19th century and is a
								sincere denunciation of the abuses and excesses committed by friars and civil
								administrators. However, it also serves as an honest exposure of the defects and
								weaknesses of the Filipinos themselves, illustrating Rizal&apos;s belief that &quot;there are
								no tyrants where there are no slaves&quot;. It portrays the miserable plight of the
								Filipino masses to convince Spanish authorities of the urgent need for reforms in
								society, the government, and the Catholic Church.
							</p>

							<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
								Reception and Backlash
							</h3>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								The publication of <i>Noli Me Tangere</i> made Rizal famous overnight, but it also
								caused popular animosity towards the Spaniards. The book kindled varied reactions:
							</p>
							<div className="space-y-3">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<strong>European Scholars:</strong> Rizal received commendations from European scholars
									like Dr. Adolph B. Meyer, Friedrich Ratzel, Feodor Jagor, and Ferdinand
									Blumentritt. Blumentritt noted that the book hurt Spanish national pride.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<strong>Spanish Authorities and Friars:</strong> The Spanish friars reacted with maddening
									anger and alarm. A committee of Dominican priests found the novel heretical,
									scandalous, and subversive. Augustinian Salvador Font recommended the absolute
									prohibition of the book, claiming it sought to overthrow the government. Father
									Jose Rodriguez also published a series of eight pamphlets attempting to discredit
									it.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<strong>Filipino Reformists:</strong> Marcelo H. Del Pilar defended the novel against
									Father Font&apos;s attacks. Father Vicente Garcia also published a defense of the
									book under the pen name V. Caraig. The Filipino masses reacted enthusiastically,
									as they were seeing themselves and their problems portrayed with truthful
									awareness for the first time.
								</p>
							</div>
							<div className="clear-both" />
						</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsNoliExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col justify-between rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-left shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Noli Me Tangere card</span>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Noli_Me_Tangere.jpg"
								alt="Noli Me Tangere cover"
								className="mx-auto block h-56 w-full max-w-40 border border-[#A72703]/20 object-cover object-top"
							/>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-center text-sm text-[#3D2A1C] sm:text-base">
								Published: March 1887
							</p>
						</button>
					)}

					{isElFiliExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B]">
									El Filibusterismo
								</h2>
								<button
									type="button"
									onClick={() => setIsElFiliExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>
						<div className="space-y-4">
							<figure className="mx-auto w-full max-w-[18rem] md:float-right md:mb-4 md:ml-6 md:mt-1">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/c/c6/First_page_of_El_filibusterismo_manuscript.jpg"
									alt="First page of El Filibusterismo manuscript"
									className="block h-auto w-full border border-[#A72703]/20"
								/>
								<figcaption className="atkinson-hyperlegible-mono-regular mt-2 w-full text-xs leading-relaxed text-[#3D2A1C]">
									By Original uploader was Jojit fb at tl.wikipedia, Copyrightholder: Dr. José P.
									Rizal (full name: José Protacio Rizal Mercado y Alonso Realonda) (June 19, 1861 –
									December 30, 1896), Public Domain,
									<a
										href="https://commons.wikimedia.org/w/index.php?curid=3905289"
										target="_blank"
										rel="noopener noreferrer"
										className="ml-1 text-[#A72703] underline underline-offset-2 hover:opacity-80"
									>
										https://commons.wikimedia.org/w/index.php?curid=3905289
									</a>
								</figcaption>
							</figure>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							El Filibusterismo is a novel written by Filipino nationalist Jose Rizal and serves as the
							sequel to his earlier work, <i>Noli Me Tangere</i>. The novel is a political satire
							written for reform propaganda, portraying a society on the verge of a revolution.
							Alongside its predecessor, it is considered one of the greatest Philippine social
							documents and an inspiring source of patriotism. Under Republic Act 1425, passed by
							the Congress of the Philippines on June 12, 1956, reading both novels is compulsory
							in all colleges and universities in the country.
						</p>

						<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
							Publication History
						</h3>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							Rizal wrote <i>El Filibusterismo</i> while traveling through Europe and completed the
							manuscript in July 1891 in Brussels. At the time, Rizal was penniless and suffering
							from privations, which forced him to shorten the book to match his dwindling
							financial resources. He was unable to publish it until he received financial
							assistance from Valentin Ventura. The novel was finally published in September 1891.
							Spanish authorities summarily accused Rizal of dedicating this second novel to the
							memory of three priests who were proven traitors to the nation, but whom Rizal
							extolled as martyrs.
						</p>

						<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
							Plot Summary
						</h3>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							The narrative of <i>El Filibusterismo</i> picks up the threads where <i>Noli Me
							Tangere</i> leaves off. The story begins on the dingy steamer Tabo en route to San
							Diego on the Pasig River, introducing the return of Juan Crisostomo Ibarra under the
							assumed name of Simoun. After thirteen years away, Simoun has transformed into an
							exotic-looking, affluent jeweler who radiates great influence and has become the
							indispensable consultant to the Governor General. He secretly returns to overthrow
							the government and avenge the injustices he suffered.
						</p>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							Simoun&apos;s secret identity is discovered by Basilio, a medical student, during a
							Christmas day visit to his mother&apos;s grave in the woods of the Ibarras. Simoun
							attempts to ignite the fires of rebellion twice but fails on both occasions. His
							first attempt collapses when he receives news of Maria Clara&apos;s death just as he is
							about to give the signal for a coordinated attack, causing him to forget his waiting
							followers and resulting in a disorganized rampage.
						</p>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							His second attempt is thwarted by Isagani, a young poet. Simoun had sent a lamp
							containing a homemade bomb as a wedding gift to Isagani&apos;s former sweetheart, timed
							to blow up when all the invited high officials and friars were seated at the feast.
							Isagani snatches the lamp before it can detonate. Hunted by the law and wounded
							after a parchment identifying him as Ibarra is circulated, Simoun flees with his
							jewels and seeks sanctuary in the house of a native priest, Father Florentino. To
							escape his pursuers, he takes poison and dies in despair.
						</p>

						<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
							Major Characters
						</h3>
						<div className="space-y-4">
							<div className="flex flex-wrap justify-center gap-2">
								{elFiliCharacters.map((character) => {
									const isActive = character.name === activeElFiliCharacter
									return (
										<button
											key={character.name}
											type="button"
											onClick={() => setActiveElFiliCharacter(character.name)}
											className={`rounded border px-3 py-2 text-left text-sm transition-colors sm:text-base ${
												isActive
													? 'border-[#A72703] bg-[#A72703] text-white'
													: 'border-[#A72703]/30 bg-[#FFF8F5] text-[#3D2A1C] hover:bg-[#FDEEE7]'
											}`}
										>
											{character.name}
										</button>
									)
								})}
							</div>

							<div className="rounded border border-[#A72703]/20 bg-[#FFF8F5] p-4 sm:p-5">
								<p className="atkinson-hyperlegible-mono-regular text-center leading-relaxed text-[#3D2A1C] sm:text-lg">
									<strong>{selectedElFiliCharacter.name}:</strong>{' '}
									{selectedElFiliCharacter.description}
								</p>
							</div>
						</div>

						<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
							Themes and Symbolism
						</h3>
						<div className="space-y-3">
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								<strong>The Inevitability of Revolution:</strong> While Rizal did not advocate for
								revolution, the novel suggests that an enslaved people will inevitably revolt if
								the Spanish government makes no attempt to introduce social and political reforms.
								Rizal wrote the book to show his countrymen the price of a revolution,
								demonstrating through the novel&apos;s failed uprising that leaders must seriously
								consider the problems to be solved first.
							</p>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								<strong>The Ship of State:</strong> The steamer Tabo serves as a symbol of the
								defective &quot;Ship of State&quot;. The placement of its passengers illustrates the
								discrimination of the colonial hierarchy, with brown-skinned natives and Chinese
								jammed below deck, while European-dressed passengers, friars, and officials sit
								comfortably in armchairs on the upper deck.
							</p>
							<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
								<strong>National Identity and Education:</strong> Through characters like Simoun and
								Isagani, Rizal advises the people to form their own individuality, develop an
								independent mentality rather than a colonial one, and prioritize education to
								prepare the masses for freedom and progress.
							</p>
						</div>

						<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
							Influence and Legacy
						</h3>
						<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
							The message conveyed by <i>El Filibusterismo</i> contributed to the popular feeling
							of animosity towards the Spaniards. In due course, a copy of the novel came into
							the hands of Andres Bonifacio, who interpreted its message as a direct call to armed
							uprising, eventually leading to the formation of the Katipunan and the fight for
							emancipation.
						</p>
						<div className="clear-both" />
						</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsElFiliExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col justify-between rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-left shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand El Filibusterismo card</span>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/c/c6/First_page_of_El_filibusterismo_manuscript.jpg"
								alt="First page of El Filibusterismo manuscript"
								className="mx-auto block h-56 w-full max-w-40 border border-[#A72703]/20 object-cover object-top"
							/>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-center text-sm text-[#3D2A1C] sm:text-base">
								Published: September 1891
							</p>
						</button>
					)}
				</div>
			</section>
		</main>
	)
}

export default Novels
