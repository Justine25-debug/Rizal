import React, { useEffect, useState } from 'react'

const EssaysAndArticles: React.FC = () => {
	useEffect(() => {
		document.title = 'Essays and Articles - José Rizal'
	}, [])

	const [isPorTelefonoExpanded, setIsPorTelefonoExpanded] = useState(false)
	const [isElAmorPatrioExpanded, setIsElAmorPatrioExpanded] = useState(false)
	const [isIndolenciaExpanded, setIsIndolenciaExpanded] = useState(false)
	const [isTownSchoolExpanded, setIsTownSchoolExpanded] = useState(false)
	const [isLordGazesExpanded, setIsLordGazesExpanded] = useState(false)
	const [isTortoiseMonkeyExpanded, setIsTortoiseMonkeyExpanded] = useState(false)
	const [isCockExpanded, setIsCockExpanded] = useState(false)
	const [isSenseBeautifulExpanded, setIsSenseBeautifulExpanded] = useState(false)
	const [isRevistaMadridExpanded, setIsRevistaMadridExpanded] = useState(false)
	const [isPalmSundayExpanded, setIsPalmSundayExpanded] = useState(false)
	const [isKiteHenExpanded, setIsKiteHenExpanded] = useState(false)
	const [isComoEnganaExpanded, setIsComoEnganaExpanded] = useState(false)
	const [isLaVerdadExpanded, setIsLaVerdadExpanded] = useState(false)
	const [isVisionRodriguezExpanded, setIsVisionRodriguezExpanded] = useState(false)
	const [isMalolosExpanded, setIsMalolosExpanded] = useState(false)
	const [isFilipinasDentroExpanded, setIsFilipinasDentroExpanded] = useState(false)
	const [isJuanLunaExpanded, setIsJuanLunaExpanded] = useState(false)
	const [isAncientTagalogNobilityExpanded, setIsAncientTagalogNobilityExpanded] = useState(false)
	const [isSuansAnimalsExpanded, setIsSuansAnimalsExpanded] = useState(false)
	const [isPompousGobernadorcilloExpanded, setIsPompousGobernadorcilloExpanded] = useState(false)
	const [isOnTravelExpanded, setIsOnTravelExpanded] = useState(false)
	const [isMemoriesExpanded, setIsMemoriesExpanded] = useState(false)
	const [isMarieColobiereExpanded, setIsMarieColobiereExpanded] = useState(false)
	const [isSoireeMrBExpanded, setIsSoireeMrBExpanded] = useState(false)

	return (
		<main className="">
			<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
					Essays and Articles
				</h1>
				<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

				<div className="mt-10 flex flex-wrap items-start justify-center gap-6">
					{isPorTelefonoExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Por Telefono
								</h2>
								<button
									type="button"
									onClick={() => setIsPorTelefonoExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Por Telefono</i> (English: <i>By the Telephone</i>) is a satirical pamphlet
									written by José Rizal in response to critics of his first novel,
									<i> Noli Me Tangere</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background and Content
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The pamphlet was written during the Propaganda Movement, a peaceful campaign
									for reforms in the Philippines. In this piece, Rizal used satire to ridicule
									Father Salvador Font, who chaired a committee that reviewed the <i>Noli</i>
									and recommended its absolute prohibition in the Philippines, branding it
									"heretical, impious, and scandalous."
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Through <i>Por Telefono</i>, Rizal directly confronted friar opposition and
									used satire as a literary weapon against intense religious backlash to his
									writings.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Significance
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The work is often grouped among Rizal&apos;s prose writings that demonstrate his
									literary acumen and imagination. It also functioned as a defensive tool for
									reformists, helping reiterate the urgent need for social and political change
									in the Philippines.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsPorTelefonoExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Por Telefono card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Por Telefono
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Satirical pamphlet response
							</p>
						</button>
					)}

					{isElAmorPatrioExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									El Amor Patrio
								</h2>
								<button
									type="button"
									onClick={() => setIsElAmorPatrioExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>El Amor Patrio</i> (English: <i>The Love of Country</i>) is the first
									notable essay José Rizal wrote after arriving in Spain. It is a reflective
									dissertation on patriotism, a subject Rizal called beautiful yet often
									repeated.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Publication History
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Written in 1882 when Rizal was 21, the essay appeared under his pen name
										<i> Laong Laan</i>.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Initial publication:</strong> August 20, 1882 in <i>Diarong Tagalog</i>.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Subsequent publication:</strong> October 31, 1890 in
										<i> La Solidaridad</i>, the Propaganda Movement&apos;s organ in Madrid.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Philosophy
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The essay centers on intense devotion to the native land. Echoing idealist
									tones associated with Schiller&apos;s <i>William Tell</i>, Rizal argues one must
									hold fast to the Fatherland as the source of strength.
								</p>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									A recurrent idea is self-sacrifice: if one must die, it should be in, by,
									and for one&apos;s country. The piece belongs to the resolute phase of Rizal&apos;s
									propaganda writing, where nationalism becomes a virtue shaped into formal
									ideology.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsElAmorPatrioExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand El Amor Patrio card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								El Amor Patrio
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Published first in 1882
							</p>
						</button>
					)}

					{isIndolenciaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Sobre La Indolencia De Los Filipinos
								</h2>
								<button
									type="button"
									onClick={() => setIsIndolenciaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Sobre La Indolencia De Los Filipinos</i> (English: <i>The Indolence of
									the Filipinos</i>) is Rizal&apos;s longest essay. It argues that Filipino
									&quot;indolence&quot; was not an inherent racial trait but a symptom of deeper social
									and political distortions under colonial rule.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Publication History
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The essay appeared in five installments in <i>La Solidaridad</i>, from
									July 15 to September 15, 1890.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Core Arguments and Analysis
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal acknowledged visible social lethargy but insisted it was an effect of
										backwardness, not its cause.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Natural Factors:</strong> He noted that tropical climate could
										naturally incline people toward reduced physical exertion.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Historical Context:</strong> He argued Filipinos were historically
										industrious in pre-Spanish periods, as seen in active trade networks.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Causes under Spanish Rule
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Depopulation and War:</strong> Recurrent wars and punitive campaigns
										caused severe population losses.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Forced Labor:</strong> Men were diverted from agriculture to shipbuilding
										and galleon-related labor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Abuses of Encomenderos:</strong> Colonial abuses discouraged productive
										enterprise and weakened social morale.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Trade Restrictions:</strong> Regional trade disruption, monopoly,
										bureaucratic barriers, and piracy constricted local commerce.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Proposed Solutions
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal argued for a revolutionary spirit capable of allowing new ideas to
										overcome old structures.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Education and Liberty:</strong> He urged Spain to provide broader
										educational opportunities and civil rights.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Removing Obstacles:</strong> He called for ending policies rooted in
										fear of an educated population.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsIndolenciaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Sobre La Indolencia card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Sobre La Indolencia De Los Filipinos
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								La Solidaridad, 1890
							</p>
						</button>
					)}

					{isTownSchoolExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Town School in the Philippines
								</h2>
								<button
									type="button"
									onClick={() => setIsTownSchoolExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Town School in the Philippines</i> is an essay in which José Rizal
									analyzes defects in colonial education and refutes claims that Filipino
									ignorance came from apathy toward learning.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Causes of Educational Backwardness
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Lack of means for obtaining education.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Lack of stimulus and encouragement for students.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Unfair obstacles imposed on the people.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Analysis of Conditions
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal observed that actual schooling remained far from the promises of the
										Educational Reform Decree of 1863.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Limited Access:</strong> Schools were concentrated in major towns,
										not truly present in every locality.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Curriculum:</strong> Teaching focused on reading, writing,
										arithmetic, with girls additionally taught sewing and household crafts.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Teaching Methods:</strong> Overreliance on memorization hindered
										practical understanding, especially in arithmetic.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Recommendations for Reform
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Language of Instruction:</strong> Rizal discouraged Spanish as the
										default medium when students could not understand it effectively.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Localized Materials:</strong> He proposed history and geography
										texts in local dialects to improve comprehension.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsTownSchoolExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Town School card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Town School in the Philippines
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Essay on colonial education
							</p>
						</button>
					)}

					{isLordGazesExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Lord Gazes at the Philippines
								</h2>
								<button
									type="button"
									onClick={() => setIsLordGazesExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Lord Gazes at the Philippines</i> is an untitled prose work by
									José Rizal, commonly grouped by researchers and compilers among his
									various essays and literary pieces.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece belongs to collections of Rizal&apos;s writings systematically
									compiled by scholars, especially amid centenary-era efforts in 1961. Since
									the manuscript had no formal original title, publishers designated it as
									<i> The Lord Gazes at the Philippines</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Like many of Rizal&apos;s prose works, it contributes to his broader social and
										political thought.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It helps reveal the country&apos;s malaise and stresses the need for reform.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It aligns with Rizal&apos;s critiques of friar and official misconduct.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsLordGazesExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Lord Gazes at the Philippines card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Lord Gazes at the Philippines
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Untitled prose work
							</p>
						</button>
					)}

					{isAncientTagalogNobilityExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Ancient Tagalog Nobility
								</h2>
								<button
									type="button"
									onClick={() => setIsAncientTagalogNobilityExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Ancient Tagalog Nobility</i> is an untitled prose work by José
									Rizal. It belongs to collections of essays and research notes
									systematically compiled by scholars to preserve his intellectual
									legacy.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece was identified and given its current title by publishers
									and compilers, a process influenced by the Rizal Centenary in 1961.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Related Untitled or Incomplete Works
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										The Lord Gazes at the Philippines
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										The Tortoise and the Monkey
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Suan&apos;s Animals
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsAncientTagalogNobilityExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Ancient Tagalog Nobility card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Ancient Tagalog Nobility
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Untitled prose work (later compiled title)
							</p>
						</button>
					)}

					{isTortoiseMonkeyExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Tortoise and the Monkey
								</h2>
								<button
									type="button"
									onClick={() => setIsTortoiseMonkeyExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Tortoise and the Monkey</i> is a prose work by José Rizal,
									commonly grouped among untitled pieces that were later assigned titles by
									publishers and researchers.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Compilation
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece forms part of systematic efforts to preserve Rizal&apos;s essays and
									memorabilia, especially those influenced by centenary-era scholarship in
									1961. Alongside writings such as <i>The Ancient Tagalog Nobility</i>, it is
									regarded as part of his intellectual legacy.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Style
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Literary Acumen:</strong> The work is often cited as an example
										of Rizal&apos;s imagination and literary skill.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Political and Social Thinking:</strong> As with many prose pieces,
										it engages concerns about national malaise and the need for reform.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique of Authority:</strong> It aligns with writings that
										criticize abuses by friars, political officials, and colonial forces such
										as the guardia civil.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsTortoiseMonkeyExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Tortoise and the Monkey card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Tortoise and the Monkey
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Untitled prose compilation
							</p>
						</button>
					)}

					{isSuansAnimalsExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Suan&apos;s Animals
								</h2>
								<button
									type="button"
									onClick={() => setIsSuansAnimalsExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Suan&apos;s Animals</i> is an incomplete manuscript written by José
									Rizal. It is categorized among his prose works, research notes, and
									rough drafts that were systematically compiled by scholars after
									the Propaganda Movement.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Compilation
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Its preservation was part of a broader scholarly effort to compile
									Rizal&apos;s essays and memorabilia for posterity, especially under the
									influence of the Rizal Centenary in 1961.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It is commonly grouped with incomplete manuscripts such as
										<i> Reminiscences of a Cock</i>, <i>Pompous Gobernadorcillo</i>,
										and <i>The Sense of the Beautiful</i>.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Style
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As part of Rizal&apos;s wider prose corpus, the manuscript reflects his
										literary acumen and imagination, and contributes to his political
										and social thinking.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Although the surviving text does not fully detail the specific
										narrative of the animals, Rizal&apos;s prose in this period often
										reveals national malaise and the need for reform.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It also denounces improper behavior by friars and political
										officials, including the guardia civil, while challenging public
										indifference to prevailing social and political standards.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsSuansAnimalsExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Suan's Animals card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Suan&apos;s Animals
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Incomplete manuscript in Rizal&apos;s prose corpus
							</p>
						</button>
					)}

					{isPompousGobernadorcilloExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Pompous Gobernadorcillo
								</h2>
								<button
									type="button"
									onClick={() => setIsPompousGobernadorcilloExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Pompous Gobernadorcillo</i> is an incomplete manuscript written by
									José Rizal. It is categorized among his prose works, research notes,
									and rough drafts that were systematically compiled by researchers
									and scholars to preserve his intellectual legacy.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The work was identified and preserved as part of a broader scholarly
									effort influenced by the Rizal Centenary in 1961.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It is commonly grouped with unfinished or untitled manuscripts such
										as <i>Suan&apos;s Animals</i>, <i>Reminiscences of a Cock</i>, and
										<i> The Sense of the Beautiful</i>.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsPompousGobernadorcilloExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Pompous Gobernadorcillo card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Pompous Gobernadorcillo
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Incomplete manuscript in Rizal&apos;s prose corpus
							</p>
						</button>
					)}

					{isCockExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Reminiscences of a Cock
								</h2>
								<button
									type="button"
									onClick={() => setIsCockExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Reminiscences of a Cock</i> is an incomplete manuscript by José Rizal.
									It belongs to collections of shorter prose works and research notes compiled
									by scholars to preserve his intellectual legacy.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Researchers identified and categorized the piece in the context of
									centenary-era scholarship around 1961. It is often grouped with unfinished
									or untitled works such as <i>Suan&apos;s Animals</i>,
									<i> Pompous Gobernadorcillo</i>, and <i>The Sense of the Beautiful</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Style
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with many of Rizal&apos;s prose works, the manuscript reflects literary
										imagination and social critique.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It aligns with writings that expose national malaise, criticize abuse by
										friars and political officials (including the guardia civil), and challenge
										public indifference.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsCockExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Reminiscences of a Cock card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Reminiscences of a Cock
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Incomplete manuscript
							</p>
						</button>
					)}

					{isSenseBeautifulExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Sense of the Beautiful
								</h2>
								<button
									type="button"
									onClick={() => setIsSenseBeautifulExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Sense of the Beautiful</i> is an incomplete manuscript by José
									Rizal. It is categorized among his prose works, research notes, and
									unfinished drafts preserved by scholars.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Compilation
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Its preservation was strongly influenced by centenary efforts in 1961. It
									is grouped with incomplete manuscripts such as <i>Suan&apos;s Animals</i>,
									<i> Reminiscences of a Cock</i>, and <i>Pompous Gobernadorcillo</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Style
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As in other prose writings, the piece reflects Rizal&apos;s literary acumen
										and imagination.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Though the surviving text does not fully detail its narrative, it aligns
										with works that expose social malaise, denounce abuse by friars and
										officials, and call for urgent reform among Filipinos.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsSenseBeautifulExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Sense of the Beautiful card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Sense of the Beautiful
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Incomplete manuscript
							</p>
						</button>
					)}

					{isOnTravelExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									On Travel (Los Viajes)
								</h2>
								<button
									type="button"
									onClick={() => setIsOnTravelExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>On Travel</i> (Spanish: <i>Los Viajes</i>) is a prose work by José
									Rizal that reflects his literary acumen, imagination, and social
									awareness.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Publication and Context
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The article appeared in <i>La Solidaridad</i>, the principal news
									source for Filipinos during the Propaganda Movement. It was written
									between 1889 and 1891, when Rizal was in Spain and using the
									Masonic pseudonym <i>Dimas Alang</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with much of Rizal&apos;s prose, this essay formed an integral part
										of his political and social thinking.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Exposing National Malaise:</strong> It reveals the country&apos;s
										&quot;social cancer&quot; with candor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique of Authority:</strong> It denounces improper conduct
										by friars and political officials, including the guardia civil.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Advocating for Reform:</strong> It contributes to the reformist
										urgency associated with <i>La Solidaridad</i>.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Challenging Indifference:</strong> While criticizing colonial
										rulers, Rizal also reprimands Filipino public indifference.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Style
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece is described as a &quot;medley,&quot; a label also used for some of
									Rizal&apos;s French-language writings. It is often grouped with works
									such as <i>Revista de Madrid</i>, <i>The Vision of Father Rodriguez</i>,
									and <i>Por Telefono</i>.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsOnTravelExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand On Travel (Los Viajes) card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								On Travel (Los Viajes)
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Essay in La Solidaridad (1889–1891)
							</p>
						</button>
					)}

					{isMemoriesExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Memories
								</h2>
								<button
									type="button"
									onClick={() => setIsMemoriesExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Memories</i> is a prose work by José Rizal that highlights his
									literary acumen and imagination. It is categorized as a social and
									political essay reflecting his perceptive philosophy and keen sense
									of awareness.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The article appeared in <i>La Solidaridad</i>, the primary newspaper
									for Filipinos during the Propaganda Movement, between 1889 and
									1891. During this period, Rizal often wrote under the Masonic
									pseudonym <i>Dimas Alang</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Purpose and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with much of Rizal&apos;s prose, <i>Memories</i> formed an integral
										part of his broader political and social thinking.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Exposing National Malaise:</strong> It revealed the
										country&apos;s &quot;social cancer&quot; with candor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique of Authority:</strong> Rizal denounced the improper
										behavior of friars and political officials.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Advocating for Reform:</strong> The piece reinforced the
										urgency for reform that characterized <i>La Solidaridad</i>.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Challenging Indifference:</strong> While blaming Spanish
										officials for the state of the country, Rizal also reprimanded
										Filipino indifference.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Legacy
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The essay was among roughly one hundred pieces Rizal wrote in the
									decade before his exile to Dapitan. It was systematically compiled
									by researchers and scholars during the Rizal Centenary in 1961 to
									preserve his works for posterity.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMemoriesExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Memories card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Memories
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Essay in La Solidaridad (1889–1891)
							</p>
						</button>
					)}

					{isRevistaMadridExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Revista de Madrid
								</h2>
								<button
									type="button"
									onClick={() => setIsRevistaMadridExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Revista de Madrid</i> (English: <i>Madrid Review</i>) is a prose work by
									José Rizal, commonly classified among his articles demonstrating literary
									acumen and imagination.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece appeared in <i>La Solidaridad</i>, the principal reformist
									publication of the Propaganda Movement. It belongs to a wider body of prose
									that includes works such as <i>On Travel Memories</i>,
									<i> The Vision of Father Rodriguez</i>, and <i>Por Telefono</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Purpose and Themes
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Reveal Social Malaise:</strong> The article participates in
										exposing the country&apos;s ailments with directness.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique Authority:</strong> It aligns with Rizal&apos;s criticism of
										friar abuses and misconduct by political officials and colonial forces.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Advocate for Reform:</strong> It contributes to the reformist
										urgency that characterized the pages of <i>La Solidaridad</i>.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsRevistaMadridExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Revista de Madrid card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Revista de Madrid
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Article in La Solidaridad
							</p>
						</button>
					)}

					{isPalmSundayExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Significance of Palm Sunday
								</h2>
								<button
									type="button"
									onClick={() => setIsPalmSundayExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Significance of Palm Sunday</i> is a literary piece written by José
									Rizal in French. It is commonly classified as part of a &quot;medley&quot; of his
									French-language writings.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Researchers preserved and categorized the piece through systematic
									compilation of Rizal&apos;s essays, notes, and drafts, particularly under
									centenary-era scholarship in 1961. It is often grouped with works such as
									<i> Marie Colobiere: the Pistol of the Little Baroness</i>,
									<i> The Kite and the Hen</i>, and <i>A Soiree at the home of Mr B</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Though written in French, the piece reflects the same literary acumen,
										imagination, and social critique found across Rizal&apos;s prose corpus.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It aligns with writings that reveal national malaise, denounce friar and
										official misconduct, and challenge public indifference to the country&apos;s
										condition.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsPalmSundayExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Significance of Palm Sunday card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Significance of Palm Sunday
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								French-language medley piece
							</p>
						</button>
					)}

					{isMarieColobiereExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Marie Colobiere: the Pistol of the Little Baroness
								</h2>
								<button
									type="button"
									onClick={() => setIsMarieColobiereExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Marie Colobiere: the Pistol of the Little Baroness</i> is a
									literary piece by José Rizal, categorized as part of a medley of
									works originally written in French.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece was identified and preserved through systematic scholarly
									compilation of Rizal&apos;s essays, unfinished manuscripts, and research
									notes, especially during centenary scholarship in 1961.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It is commonly grouped with French-language medleys such as
										<i> The Significance of Palm Sunday</i>,
										<i> The Kite and the Hen</i>, and
										<i> A Soiree at the home of Mr B</i>.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with much of Rizal&apos;s prose, this work contributes to his broader
										political and social thinking while showing literary acumen and
										imagination.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Reveal Social Malaise:</strong> It aligns with writings that
										expose the country&apos;s ailments with candor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique Authority:</strong> It reflects Rizal&apos;s denunciation
										of friar and official abuses, including those of the guardia civil.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Challenge Indifference:</strong> It follows Rizal&apos;s pattern of
										rebuking Filipino indifference while criticizing colonial rule.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMarieColobiereExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Marie Colobiere card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Marie Colobiere: the Pistol of the Little Baroness
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								French-language medley literary piece
							</p>
						</button>
					)}

					{isSoireeMrBExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									A Soiree at the home of Mr B
								</h2>
								<button
									type="button"
									onClick={() => setIsSoireeMrBExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>A Soiree at the home of Mr B</i> is a French-language literary
									piece by José Rizal. It is categorized as part of a medley of works
									that demonstrate his literary acumen and imagination.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece was identified and preserved by researchers and scholars
									who systematically compiled Rizal&apos;s essays, unfinished manuscripts,
									and research notes for posterity, especially during centenary-era
									scholarship in 1961.
								</p>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It is grouped with other French-language medleys such as
										<i> The Significance of Palm Sunday</i>,
										<i> Marie Colobiere: the Pistol of the Little Baroness</i>, and
										<i> The Kite and the Hen</i>.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with much of Rizal&apos;s prose, this work forms part of his broader
										political and social thinking.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										While the surviving document does not fully detail the narrative of
										the soiree, Rizal&apos;s prose in this period is associated with social
										analysis and reformist critique.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Reveal Social Malaise:</strong> His writings exposed the
										country&apos;s ailments with candor.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique Authority:</strong> He denounced improper behavior
										by friars and political officials, including the guardia civil.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Challenge Indifference:</strong> He also reprimanded Filipino
										indifference while criticizing colonial rule.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsSoireeMrBExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand A Soiree at the home of Mr B card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								A Soiree at the home of Mr B
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								French-language medley literary piece
							</p>
						</button>
					)}

					{isKiteHenExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									The Kite and the Hen
								</h2>
								<button
									type="button"
									onClick={() => setIsKiteHenExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>The Kite and the Hen</i> is a French-language literary piece by José
									Rizal, commonly grouped in the medley of his French prose writings.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Classification
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Researchers and compilers identified and preserved the piece through
									systematic cataloging of Rizal&apos;s essays, notes, and unfinished manuscripts,
									especially in scholarship associated with the Rizal Centenary of 1961.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Like Rizal&apos;s other French prose, it reflects literary imagination and
										social analysis linked to his wider political thought.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It aligns with writings that expose national malaise, denounce abuses by
										friars and officials, and challenge public indifference to the country&apos;s
										condition.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsKiteHenExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand The Kite and the Hen card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								The Kite and the Hen
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								French-language medley piece
							</p>
						</button>
					)}

					{isComoEnganaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Como se Engana la Patria
								</h2>
								<button
									type="button"
									onClick={() => setIsComoEnganaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Como se Engana la Patria</i> (English: <i>How to Deceive the
									Motherland</i>) is a satirical essay by José Rizal, published on
									May 15, 1889.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Distinction of Entities:</strong> Rizal stresses that religion and
										the friar are not identical, famously framing the difference as
										&quot;Religion is one thing and the friar is another.&quot;
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Institutional Integrity:</strong> He argues that contradictions and
										abuses by specific friars should not automatically be equated with the
										true spirit of the Catholic Church.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Style and Purpose
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As satire, the essay is used to reprimand the improper conduct of friars
										and political officials.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										It also challenges social indifference while assigning primary blame for
										the nation&apos;s condition to its rulers.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsComoEnganaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Como se Engana la Patria card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Como se Engana la Patria
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Published: May 15, 1889
							</p>
						</button>
					)}

					{isLaVerdadExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									La Verdad para Todos
								</h2>
								<button
									type="button"
									onClick={() => setIsLaVerdadExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>La Verdad para Todos</i> (English: <i>Truth for All</i>) is an
									analytical essay by José Rizal. It critiques prevailing corruption in
									the Philippines while defending Filipinos against accusations of
									demoralization.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Responsibility of Rulers:</strong> Rizal argues that corruption
										in the islands should be blamed on rulers, not on a people deprived
										of liberty.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Mastery of Action:</strong> He notes that accountability
										requires mastery over one&apos;s actions, yet Filipinos under colonial
										conditions were masters of neither their actions nor their thoughts.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Collective Failure:</strong> Rizal identifies three responsible
										groups: the government through weakness, the people through
										ignorance, and &quot;the good&quot; through selfish silence.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Critique of the Press
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Rebuttal to La Voz de España:</strong> Rizal counters positions
										that sought to &quot;seal the lips of the accusers.&quot;
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Call for Inquiry:</strong> He insists demoralization cannot be
										resolved by silence, but by investigating social ills and
										prosecuting criminals.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsLaVerdadExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand La Verdad para Todos card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								La Verdad para Todos
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Analytical critique of colonial corruption
							</p>
						</button>
					)}

					{isVisionRodriguezExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									La Vision del Fray Rodriguez
								</h2>
								<button
									type="button"
									onClick={() => setIsVisionRodriguezExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>La Vision del Fray Rodriguez</i> (English: <i>The Vision of Friar
									Rodriguez</i>) is a satirical pamphlet by José Rizal written as a direct
									rebuttal to attacks on <i>Noli Me Tangere</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Background
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									After the publication of the <i>Noli</i>, Father Jose Rodriguez issued eight
									pamphlets titled <i>Questiones de Sumo Interes</i> to discredit Rizal&apos;s
									novel. Rizal responded with this work, using satire to counter those
									criticisms.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Style
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The piece is marked by ridicule and satire directed at friar authority.
									It is often discussed alongside Rizal&apos;s other imaginative prose works such
									as <i>Por Telefono</i> and <i>Revista de Madrid</i>.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Purpose in Reform Discourse
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Like many shorter pieces, the pamphlet supported the Propaganda Movement by
									reiterating the urgency of reform and exposing the social cancer produced by
									the colonial administration.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsVisionRodriguezExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand La Vision del Fray Rodriguez card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								La Vision del Fray Rodriguez
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Satirical rebuttal pamphlet
							</p>
						</button>
					)}

					{isFilipinasDentroExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Filipinas Dentro de Cien Años
								</h2>
								<button
									type="button"
									onClick={() => setIsFilipinasDentroExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Filipinas Dentro de Cien Años</i> (English:
									<i> The Philippines Within a Century</i>) is a series of four
									articles written by José Rizal and published in <i>La Solidaridad</i> between September 30, 1889 and February 1, 1890. The essay offers
									a detailed socio-political analysis of the Philippines based on
									its past and present conditions.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Historical Analysis
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal characterizes the Spanish era as a period of military conquest
										that contributed to the deterioration of indigenous culture.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Depopulation:</strong> Numerous military campaigns caused
										major population losses.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Economic Neglect:</strong> Recruitment of men for military
										service disrupted families, agriculture, and local livelihoods.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Retrogression:</strong> A broad retardation occurred in many
										areas of Filipino social and economic life.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Contemporary Conditions
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal observes that Spanish military power appeared stronger because
										of improved communication, yet internal social agitation was rising.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Inequality:</strong> Taxes and contributions increased
										without corresponding rights or liberties.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Financial Crisis:</strong> The country faced severe financial
										strain while accountability for abuses remained absent.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Spread of Enlightenment:</strong> Rizal insists the
										&quot;divine flame of thought&quot; among Filipinos could not be extinguished,
										despite repressive education.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Proposed Political Reforms
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal argues that if the Philippines were to remain under Spanish
										rule, colonial policy had to align with rising nationalism. He also
										warns that reforms initiated by authorities would be peaceful, while
										reforms forced by the masses would likely be violent.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Freedom of the Press:</strong> Essential for peaceful reform.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Cortes Representation:</strong> Restoration of Filipino
										representation in the Spanish legislature.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Civil Service:</strong> Filling government posts through
										competitive examinations.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Sectoral Improvements:</strong> Reforms in commerce,
										agriculture, education, and the security of persons and property.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Predictions on Independence
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal concludes that if the Philippines were not assimilated and
										Filipino rights were not respected, independence would be inevitable.
										He notes that although the country was not yet prepared for a war
										of freedom, Spain could eventually be replaced by another power.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										These projections were realized within the century: Admiral Dewey&apos;s
										fleet entered Manila Bay in 1898, and Philippine independence was
										internationally recognized in July 1946, fifty years after Rizal&apos;s
										death.
									</p>
								</div>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsFilipinasDentroExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Filipinas Dentro de Cien Años card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Filipinas Dentro de Cien Años
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Published in La Solidaridad (1889–1890)
							</p>
						</button>
					)}

					{isJuanLunaExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Juan Luna
								</h2>
								<button
									type="button"
									onClick={() => setIsJuanLunaExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Juan Luna</i> is a prose work by José Rizal. It is commonly
									categorized as a lead article that reflects Rizal&apos;s literary
									acumen and imagination.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Publication History
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The essay was published in the periodical <i>La Ilustración</i>.
									The issue dated February 28, 1886 prominently featured Juan Luna&apos;s
									photograph on the cover.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Context and Significance
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										As with many of Rizal&apos;s prose writings, the essay formed part of
										his broader political and social thinking.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Honoring Filipino Achievement:</strong> The article pays
										tribute to Juan Luna&apos;s accomplishments in Europe, especially his
										gold medal for <i>Spoliarium</i> in 1884, marking a new era of
										Filipino recognition.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Propaganda Tool:</strong> Alongside essays like <i>Brindis</i>,
										the piece uses Luna&apos;s genius, glories, and triumphs to defend
										Filipinos from sarcastic and unjust colonial criticism.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Preservation:</strong> The essay was among the works
										systematically compiled by scholars during the 1961 Rizal
										Centenary to preserve his intellectual legacy.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Related Works
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									The essay is often studied alongside Rizal&apos;s <i>Brindis</i>, a
									commemorative speech delivered on June 25, 1884 honoring Juan
									Luna and Felix Resurrección Hidalgo. While <i>Brindis</i> was a
									speech, <i>Juan Luna</i> offered a written and public celebration
									of Filipino talent in the Spanish press.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsJuanLunaExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Juan Luna card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Juan Luna
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Lead article in La Ilustración (1886)
							</p>
						</button>
					)}

					{isMalolosExpanded ? (
						<div className="order-2 w-full space-y-4 border border-[#A72703]/15 bg-[#FFFDFB] p-5 shadow-sm sm:p-8">
							<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#A72703]/30 pb-2">
								<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B] sm:text-4xl">
									Sa mga Kababayang Dalaga sa Malolos
								</h2>
								<button
									type="button"
									onClick={() => setIsMalolosExpanded(false)}
									className="atkinson-hyperlegible-mono-regular rounded border border-[#A72703]/30 bg-[#FFF8F5] px-3 py-1 text-sm text-[#A72703] transition-colors hover:bg-[#FDEEE7]"
								>
									Collapse
								</button>
							</div>

							<div className="space-y-4">
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									<i>Sa mga Kababayang Dalaga sa Malolos</i> (English: <i>To My Countrywomen
									of Malolos</i>) is a famous letter by José Rizal dated February 22, 1889.
									In it, he congratulates the women of Malolos for their courage and outlines
									his views on the role of Filipino women in nation-building.
								</p>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Themes and Content
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Praise for Mannerisms:</strong> Rizal commends the gentle manners
										of the young women of Malolos.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Critique of Submissiveness:</strong> He warns against meek submission
										to the caprices of abusive religious authority.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Causes of Faults:</strong> He attributes social weakness to excessive
										goodness, misplaced humility, or ignorance.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Equality and Self-Respect:</strong> The letter stresses dignity,
										equality, and a morally grounded understanding of religion.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										<strong>Warning on Ignorance:</strong> Rizal presents ignorance as bondage
										and links social betrayal to collective cowardice and negligence.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Moral and Social Teachings
								</h3>
								<div className="space-y-3">
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										Rizal places mothers at the center of moral formation and civic education.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										He urges women to raise children who guard their honor, love their
										countrymen and motherland, and fulfill duty with integrity.
									</p>
									<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
										He underscores the principle that it is better to die with honor than to
										live in dishonor, and he calls for sincerity, honesty, purity, and love.
									</p>
								</div>

								<h3 className="bebas-neue-regular overflow-hidden border-b border-[#A72703]/30 pb-1 text-2xl font-semibold tracking-wide text-[#1A120B] sm:text-3xl">
									Legacy
								</h3>
								<p className="atkinson-hyperlegible-mono-regular max-w-none text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
									Rizal closes with a line associated with <i>Kay Selya</i> from
									<i> Florante at Laura</i>: &quot;My pains shall have their great reward,&quot;
									linking sacrifice, virtue, and national hope.
								</p>
							</div>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setIsMalolosExpanded(true)}
							aria-expanded="false"
							className="order-1 flex h-80 w-full max-w-44 flex-col items-center justify-center rounded-2xl border border-[#A72703]/20 bg-[#FFFDFB] p-4 text-center shadow-sm transition-colors hover:bg-[#FFF8F5] sm:p-5"
						>
							<span className="sr-only">Expand Sa mga Kababayang Dalaga sa Malolos card</span>
							<p className="bebas-neue-regular text-2xl font-semibold leading-tight tracking-wide text-[#1A120B]">
								Sa mga Kababayang Dalaga sa Malolos
							</p>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-xs text-[#3D2A1C] sm:text-sm">
								Letter dated: Feb 22, 1889
							</p>
						</button>
					)}
				</div>
			</section>
		</main>
	)
}

export default EssaysAndArticles
