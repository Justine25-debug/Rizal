import React, { useEffect } from 'react'
import segundaKatigbakPaintingImg from '../../assets/womenofrizal/Rizal-Women-Segunda-Katigbak-Painting-150x150.jpg'
import leonorRiveraPaintingImg from '../../assets/womenofrizal/Rizal-Women-Leonor-Rivera-Painting-150x150.jpg'
import leonorValenzuelaPaintingImg from '../../assets/womenofrizal/Rizal-Women-Leonor-Valenzuela-Painting-150x150.jpg'
import leonorRiveraImg from '../../assets/womenofrizal/Rizal-Women-Leonor-Rivera-150x150.jpg'
import consueloOrtigaPerezImg from '../../assets/womenofrizal/Rizal-Women-Consuelo-Ortiga-Perez-150x150.jpg'
import oseisanImg from '../../assets/womenofrizal/Rizal-Women-O-Sei-San-150x150.jpg'
import gertrudeBeckettImg from '../../assets/womenofrizal/Rizal-Women-Gertrude-Beckett-150x150.jpg'
import suzanneJacobyImg from '../../assets/womenofrizal/Rizal-Women-Suzanne-Jacoby-150x150.jpg'
import nellyBousteadImg from '../../assets/womenofrizal/Rizal-Women-Nelly-Boustead-150x150.jpg'
import adelineBousteadImg from '../../assets/womenofrizal/Rizal-Women-Adeline-Boustead-150x150.jpg'
import josephineBrackenBrImg from '../../assets/womenofrizal/Rizal-Women-Josephine_Bracken_BR-150x150.jpg'
import josephineBrackenImg from '../../assets/womenofrizal/Rizal-Women-Josephine-Bracken-150x150.jpg'

type RizalWomanPhoto = {
	name: string
	src: string
}

const WOMEN_OF_RIZAL_PHOTOS: RizalWomanPhoto[] = [
	{ name: 'Segunda Katigbak (Painting)', src: segundaKatigbakPaintingImg },
	{ name: 'Leonor Rivera (Painting)', src: leonorRiveraPaintingImg },
	{ name: 'Leonor Valenzuela (Painting)', src: leonorValenzuelaPaintingImg },
	{ name: 'Leonor Rivera', src: leonorRiveraImg },
	{ name: 'Consuelo Ortiga Pérez', src: consueloOrtigaPerezImg },
	{ name: 'O-Sei-San', src: oseisanImg },
	{ name: 'Gertrude Beckett', src: gertrudeBeckettImg },
	{ name: 'Suzanne Jacoby', src: suzanneJacobyImg },
	{ name: 'Nelly Boustead', src: nellyBousteadImg },
	{ name: 'Adeline Boustead', src: adelineBousteadImg },
	{ name: 'Josephine Bracken (BR)', src: josephineBrackenBrImg },
	{ name: 'Josephine Bracken', src: josephineBrackenImg },
]

const WomenOfRizal: React.FC = () => {
	useEffect(() => {
		document.title = 'The Women in the Life of Rizal - José Rizal'
	}, [])

	return (
		<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
			<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
				The Women in the Life of Rizal
			</h1>
			<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

			<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{WOMEN_OF_RIZAL_PHOTOS.map((photo) => (
					<figure
						key={photo.src}
						className="overflow-hidden rounded-lg border border-[#A72703]/20 bg-white p-2 shadow-sm"
					>
						<img
							src={photo.src}
							alt={photo.name}
							className="h-auto w-full rounded-md"
							loading="lazy"
							decoding="async"
						/>
						<figcaption className="atkinson-hyperlegible-mono-regular mt-2 text-center text-xs font-semibold leading-snug text-[#3D2A1C]">
							{photo.name}
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}

export default WomenOfRizal
