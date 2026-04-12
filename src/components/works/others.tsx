import React, { useEffect, useState } from 'react'

const OtherWorks: React.FC = () => {
	useEffect(() => {
		document.title = 'Other Works - José Rizal'
	}, [])

	const [isConsejoExpanded, setIsConsejoExpanded] = useState(false)
	const [isMorgaAnnotationsExpanded, setIsMorgaAnnotationsExpanded] = useState(false)
	const [isArtsPoeticaExpanded, setIsArtsPoeticaExpanded] = useState(false)
	const [isWilliamTellTranslationExpanded, setIsWilliamTellTranslationExpanded] = useState(false)
	const [isBrindisExpanded, setIsBrindisExpanded] = useState(false)
	const [isJuntoAlPasigExpanded, setIsJuntoAlPasigExpanded] = useState(false)
	const [isTagalischeVerskunstExpanded, setIsTagalischeVerskunstExpanded] = useState(false)
	const [isWaitzTranslationsExpanded, setIsWaitzTranslationsExpanded] = useState(false)
	const [isLigaConstitutionExpanded, setIsLigaConstitutionExpanded] = useState(false)
	const [isKrombholsResponseExpanded, setIsKrombholsResponseExpanded] = useState(false)

	return (
		<main className="">
			<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
					Other Works
				</h1>
				<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

				<div className="mt-10 flex flex-wrap items-start justify-center gap-6">
					{isConsejoExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									El Consejo de los Dioses
								</h2>
								<button
									type="button"
									onClick={() => setIsConsejoExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>El Consejo de los Dioses</i> (English: <i>The Council of Gods</i>)
									is a play written by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Awards
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									In 1879, the Liceo Artistico Literario de Manila sponsored a literary
									contest open to both mestizos and Filipinos. Rizal submitted
									<i> El Consejo de los Dioses</i> and won first prize for the play.
									During the same contest, he also won another first prize for his
									poem <i>A la Juventud Filipina</i> (To the Filipino Youth).
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Historical Significance
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The success of <i>El Consejo de los Dioses</i> and Rizal&apos;s
									prize-winning poem carried important cultural implications during the
									Spanish colonial period. These awards demonstrated that an indio
									(native Filipino) could write as well as, or even better than,
									a Spaniard.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsConsejoExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand El Consejo de los Dioses card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								El Consejo de los Dioses
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Play; first prize in 1879 contest
							</p>
						</button>
					)}

					{isMorgaAnnotationsExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Annotations to Morga&apos;s <i>Sucesos de las Islas Filipinas</i>
								</h2>
								<button
									type="button"
									onClick={() => setIsMorgaAnnotationsExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									José Rizal&apos;s annotations to Antonio de Morga&apos;s
									<i> Sucesos de las Islas Filipinas</i> is one of his most prominent
									works. Published in 1890, the annotated text aimed to present an
									objective account of 16th-century Philippine culture and civilization
									at the time of Spanish arrival.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Motivation
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal chose to reconstruct Philippine history by annotating Morga&apos;s
									work because it offered an unusually objective view of early native
									life. He also believed Spanish authorities would be less likely to ban
									a historical account written by a respected Spaniard.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									So committed was Rizal to this project that he declined an offer to
									become editor of <i>La Solidaridad</i> in order to focus on the
									annotations and wider historical research.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Content and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Through his annotations, Rizal argued that Filipinos possessed a
										developed culture even before colonization.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Native Intelligence and Literacy:</strong> Using Morga and
										other sources, Rizal emphasized that pre-colonial natives had schools
										and were highly literate. He criticized colonial schooling that forced
										children to learn in unfamiliar languages while friar-controlled
										education fostered ignorance.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Labor and Treatment:</strong> Rizal contrasted the relatively
										humane treatment of slaves in ancient societies with the inhuman
										treatment of native workers under Spanish rule.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Research Methodology
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal carried out painstaking research in the Filipiniana collection
									of the British Museum in London. He corroborated arguments using
									historians and chroniclers such as Fathers Chirino and Colin,
									San Agustin, Vidal, Buzeta, De los Rios, and Grau.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									He specifically cited Colin and Chirino in supporting claims of native
									intelligence, including observations that Filipinos were qualified for
									positions like public accountants and kingdom secretaries.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Purpose and Impact
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Published in 1890 during the height of the Propaganda Movement, the
									annotated <i>Sucesos</i> was intended for the Filipino intelligentsia.
									Rizal hoped readers would draw from factual history to defend Filipino
									dignity and rebut prejudiced claims by Spanish writers.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMorgaAnnotationsExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Annotations to Morga card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Annotations to Morga&apos;s <i>Sucesos</i>
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Annotated historical work, published 1890
							</p>
						</button>
					)}

					{isArtsPoeticaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Arts Poetica Tagala
								</h2>
								<button
									type="button"
									onClick={() => setIsArtsPoeticaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Arts Poetica Tagala</i> is an article written by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Publication and Background
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The article was published in <i>Zeitschrift für Ethnologie</i>
									(Journal of Ethnology). Rizal wrote it during his time in Europe,
									when he was actively engaging foreign scholars and studying ethnology.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Berlin Scholarly Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Its publication came around the same period Rizal became a member of
									the Geographical and Ethnological Society of Berlin. For admission to
									that exclusive circle of international scholars, he had to submit an
									original work, and he presented the related German-language piece
									<i> Tagalische Verskunst</i> (The Tagalog Art of Versification).
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsArtsPoeticaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Arts Poetica Tagala card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Arts Poetica Tagala
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Published in Zeitschrift für Ethnologie
							</p>
						</button>
					)}

					{isWilliamTellTranslationExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Translation of Schiller&apos;s <i>William Tell</i> into Tagalog
								</h2>
								<button
									type="button"
									onClick={() => setIsWilliamTellTranslationExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The Tagalog translation of Friedrich Schiller&apos;s
									<i> William Tell</i> was undertaken by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Motivation
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal translated the work to share its ideals of freedom and
									patriotism with his countrymen. Schiller&apos;s original is an intensely
									stirring human drama about Swiss farmers resisting the tyranny of
									their Austrian governors.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Thematic Connections
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The themes in <i>William Tell</i> strongly resonated with Rizal&apos;s own
									nationalist writings. Ideas in his essay <i>El Amor Patrio</i> echo
									the play&apos;s call to hold fast to the fatherland as the deep root of
									collective strength.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsWilliamTellTranslationExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Translation of William Tell card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Translation of Schiller&apos;s <i>William Tell</i>
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Tagalog translation on freedom and patriotism
							</p>
						</button>
					)}

					{isBrindisExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Brindis (Speech)
								</h2>
								<button
									type="button"
									onClick={() => setIsBrindisExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The <i>Brindis</i> is a memorable speech delivered by José Rizal on
									June 25, 1884, at a commemorative banquet honoring Juan Luna and
									Félix Resurrección Hidalgo.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The speech was inspired by their victories at the Madrid art exhibit:
									Luna won the gold medal for <i>Spolarium</i>, while Hidalgo received
									the silver medal for <i>Virgins Exposed to the Populace</i>.
									Rizal&apos;s toast became widely discussed and remains one of his
									better-known works.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal opened with a triumphal acclaim to Spain and the Philippines,
										presenting certain names as symbols of achievement, peace, and
										fraternal love between nations.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										He declared Luna and Hidalgo belonged to this group, whose glories
										illumined East and West, the Philippines and Spain.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal also interpreted their success as a new dawn for Filipinos,
										describing an &quot;oriental chrysalis&quot; leaving its cocoon after a long
										historic night.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										In praising <i>Spolarium</i>, he said the canvas was not mute: one
										could hear the tumult of crowds, the cry of slaves, the metallic
										creak of armor, and the prayers of the bereaved.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Literary Connections
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Themes from the <i>Brindis</i> reappear in <i>Noli Me Tangere</i>,
									where Ibarra gives a toast closely recalling the 1884 speech:
									&quot;Gentlemen, in spite of everything, I give you Spain and the
									Philippines.&quot;
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsBrindisExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Brindis speech card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Brindis (Speech)
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Commemorative toast delivered June 25, 1884
							</p>
						</button>
					)}

					{isJuntoAlPasigExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Junto Al Pasig
								</h2>
								<button
									type="button"
									onClick={() => setIsJuntoAlPasigExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Junto Al Pasig</i> is a one-act play written by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Origins
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal wrote the play after turning 19, specifically for the
									Academia de Literatura Castellana of the Ateneo Municipal.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Its primary motivation came from the oppressive racial
									discrimination Rizal experienced while studying at the University
									of Santo Tomas.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal employed strong satirical elements throughout the play.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										He satirized priestly authority through the image of a devil
										seeking adoration.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										The drama also portrays Spain as impious and as the source of
										the unhappiness afflicting a once rich and happy country.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsJuntoAlPasigExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Junto Al Pasig card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Junto Al Pasig
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								One-act satirical play written at age 19
							</p>
						</button>
					)}

					{isTagalischeVerskunstExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Tagalische Verskunst
								</h2>
								<button
									type="button"
									onClick={() => setIsTagalischeVerskunstExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Tagalische Verskunst</i> (English: <i>The Tagalog Art of
									Versification</i>) is an original scholarly work written in German
									by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Purpose
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									During his stay in Germany, Rizal interacted with scholars from
									various countries and pursued studies in practical ethnology.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									He later became a member of the Geographical and Ethnological
									Society of Berlin, a highly selective organization whose applicants
									had to submit an original work. To satisfy this requirement and
									secure membership, Rizal submitted <i>Tagalische Verskunst</i>.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsTagalischeVerskunstExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Tagalische Verskunst card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Tagalische Verskunst
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								German scholarly work for Berlin society membership
							</p>
						</button>
					)}

					{isWaitzTranslationsExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Translations of Waitz&apos;s Ethnographic Works
								</h2>
								<button
									type="button"
									onClick={() => setIsWaitzTranslationsExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									José Rizal completed translations of Waitz&apos;s
									<i> Anthropology of Primitive Peoples</i> and
									<i> General Ethnography</i> as part of his wider scientific research
									in Europe.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									While in Europe, Rizal pursued practical ethnology and the study of
									race and human differences. To deepen his observations, he immersed
									himself in ethnographic scholarship, including works associated with
									Lipper, Helwald, Ratzel, Wilkins, and Gaerlan Waitz.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									The Translations
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									As part of this sustained inquiry, Rizal translated two specific
									books by Waitz: <i>Anthropology of Primitive Peoples</i> and
									<i> General Ethnography</i>. These translations supported his effort
									to complete his observations on so-called primitive peoples and
									related racial questions.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsWaitzTranslationsExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Waitz translations card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Translations of Waitz&apos;s Ethnography
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Rizal&apos;s translations on anthropology and ethnography
							</p>
						</button>
					)}

					{isLigaConstitutionExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Constitution of La Liga Filipina
								</h2>
								<button
									type="button"
									onClick={() => setIsLigaConstitutionExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The Constitution (or statutes) of <i>La Liga Filipina</i> was the
									governing document written by José Rizal for the organization,
									formally organized on July 3, 1892. It defined the League as a
									national society and established its operational framework.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Objectives and Motto
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										The constitution set these key objectives: unifying the archipelago
										into one compact and vigorous body; mutual protection in need;
										defense against violence and injustice; promotion of education,
										agriculture, commerce, industry, and the arts; and the study and
										application of reforms.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Its official motto was: <strong>One like all</strong>.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Administrative Structure
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The statutes divided the League into three administrative bodies:
									Supreme Council, Provincial Council, and Popular Council. They also
									detailed policies, fund investment rules, and the duties and rights
									of officers and members.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Membership Rules and Duties
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Anonymity and Secrecy:</strong> Members used symbolic names,
										with real identities known only to chiefs, and were bound to strict
										secrecy regarding council decisions.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Strict Obedience:</strong> Members had to obey orders from
										the Provincial Council or chief promptly and completely.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Information Sharing:</strong> Members were required to report
										information relevant to the League.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Solidarity and Vigilance:</strong> They were expected to act
										as one body in defending rights and dignity, including support for
										the poor against abuses by the powerful.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Legal Defense
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The statutes became important in Rizal&apos;s treason trial. Defense
									counsel Lieutenant Luis Taviel de Andrade used the constitution to
									argue that the League was not subversive, emphasizing its peaceful
									goals of promoting commerce, industry, agriculture, and the arts.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsLigaConstitutionExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Constitution of La Liga Filipina card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Constitution of La Liga Filipina
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Statutes of the League organized in 1892
							</p>
						</button>
					)}

					{isKrombholsResponseExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Response to the Welcome Speech of Joseph Krombhols
								</h2>
								<button
									type="button"
									onClick={() => setIsKrombholsResponseExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The <i>Response to the welcome speech of Joseph Krombhols</i> is a
									prose work by José Rizal.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece was formulated as Rizal&apos;s reply to a welcoming address
									given by Joseph Krombhols, President of the Tourist&apos;s Club of
									Leitmeritz, Austria.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Compilation Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									In modern compilations of Rizal&apos;s intellectual output, this response
									is grouped among his &quot;other essays&quot; and miscellaneous prose pieces.
									Researchers note that many works in this category were written in
									varied languages and survive in different stages of completion.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsKrombholsResponseExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Response to Joseph Krombhols card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Response to Joseph Krombhols
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Reply to a welcome address in Leitmeritz
							</p>
						</button>
					)}
				</div>
			</section>
		</main>
	)
}

export default OtherWorks
