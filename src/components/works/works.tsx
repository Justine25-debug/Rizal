import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface WorksProps {
	matchMasonryWidth?: boolean
}

const Works: React.FC<WorksProps> = ({ matchMasonryWidth = false }) => {
	useEffect(() => {
		document.title = 'Works - José Rizal'
	}, [])

	const categories: Array<{ title: string; href: string; description: string }> = [
		{
			title: 'Novels',
			href: '/works#novels',
			description: 'Rizal’s major novels and related context.',
		},
		{
			title: 'Poetry',
			href: '/works#poetry',
			description: 'Poems, verses, and notable pieces.',
		},
		{
			title: 'Essays and Articles',
			href: '/works#essays-and-articles',
			description: 'Essays, letters, and published articles.',
		},
		{
			title: 'Plays, Speeches, Translations, and Other Works',
			href: '/works#other-works',
			description: 'Plays, speeches, translations, and more.',
		},
	]

	return (
		<main className="">
			<section
				className={
					matchMasonryWidth
						? 'mx-auto w-full max-w-8xl px-20 py-16'
						: 'mx-auto w-full max-w-7xl py-16'
				}
			>
				<h1 className="text-3xl font-semibold uppercase text-[#A72703] bebas-neue-regular">
					Works of José Rizal
				</h1>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{categories.map((category) => (
						<NavLink
							key={category.href}
							to={category.href}
							className="group border border-[#A72703]/15 bg-[#FFF8F5] p-6 transition-opacity duration-200 hover:opacity-90"
						>
							<h2 className="bebas-neue-regular text-3xl font-semibold tracking-wide text-[#1A120B]">
								{category.title}
							</h2>
							<p className="atkinson-hyperlegible-mono-regular mt-3 text-sm leading-relaxed text-[#3D2A1C] sm:text-base">
								{category.description}
							</p>
						</NavLink>
					))}
				</div>
			</section>
		</main>
	)
}

export default Works
