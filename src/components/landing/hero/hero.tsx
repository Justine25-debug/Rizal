import React, { useMemo } from 'react'

const QUOTES = [
	'“One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.” — Jose Rizal',
	'“I have to believe much in God because I have lost my faith in man.” — José Rizal, Noli Me Tángere',
	'“Cowardice rightly understood begins with selfishness and ends with shame.” — José Rizal, Noli Me Tángere',
	'“I don\'t see why I should bow my head when I could hold it high, or place it in the hands of my enemies when I can defeat them.” — José Rizal',
	'“Walang mang-aalipin kung walang paaalipin.” — José Rizal, El Filibusterismo',
	'“There are no tyrants if there are no slaves” — José Rizal',
	'“I die without seeing dawn\'s light shining on my country... You, who will see it, welcome it for me...don\'t forget those who fell during the nighttime.” — José Rizal, Noli Me Tángere',
	'“To be happy does not mean to indulge in foolishness!” — José Rizal, Noli Me Tángere',
	'“The example could encourage others who only fear to start.” — José Rizal, Noli Me Tángere',
	'“A lie among the stars / Is a comfortable lie.” — José Rizal, El Filibusterismo',
	'“The righteous man pays the sinner\'s bill.” — José Rizal, Noli Me Tángere',
]

const Hero: React.FC = () => {
	const quoteForThisRefresh = useMemo(() => {
		const randomIndex = Math.floor(Math.random() * QUOTES.length)
		return QUOTES[randomIndex]
	}, [])

	return (
		<section
			className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url('${import.meta.env.BASE_URL}Jose-Rizal_Fencing.jpg')` }}
		>
			<div className="absolute bottom-6 right-0 z-10 w-full px-6 text-right md:bottom-8 md:w-[48%] lg:w-[38%] lg:px-10">
				<p
					className="atkinson-hyperlegible-mono-regular text-base font-bold leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)] lg:text-2xl"
				>
					{quoteForThisRefresh}
				</p>
			</div>
		</section>
	)
}

export default Hero
