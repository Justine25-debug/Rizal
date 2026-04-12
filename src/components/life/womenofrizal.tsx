import React, { useEffect } from 'react'

type RizalWomanPhoto = {
	name: string
	src: string
}

const WOMEN_OF_RIZAL_PHOTOS: RizalWomanPhoto[] = [
	{ name: 'Segunda Katigbak (Painting)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Segunda-Katigbak-Painting-150x150.jpg' },
	{ name: 'Leonor Rivera (Painting)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Leonor-Rivera-Painting-150x150.jpg' },
	{ name: 'Leonor Valenzuela (Painting)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Leonor-Valenzuela-Painting-150x150.jpg' },
	{ name: 'Leonor Rivera', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Leonor-Rivera-150x150.jpg' },
	{ name: 'Consuelo Ortiga Pérez', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Consuelo-Ortiga-Perez-150x150.jpg' },
	{ name: 'O-Sei-San', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-O-Sei-San-150x150.jpg' },
	{ name: 'Gertrude Beckett', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Gertrude-Beckett-150x150.jpg' },
	{ name: 'Suzanne Jacoby', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Suzanne-Jacoby-150x150.jpg' },
	{ name: 'Nelly Boustead', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Nelly-Boustead-150x150.jpg' },
	{ name: 'Adeline Boustead', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Adeline-Boustead-150x150.jpg' },
	{ name: 'Josephine Bracken (BR)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Josephine_Bracken_BR-150x150.jpg' },
	{ name: 'Josephine Bracken', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Women-Josephine-Bracken-150x150.jpg' },
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
