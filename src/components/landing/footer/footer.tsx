import React from 'react'

const primaryLinks: Array<{ label: string; href: string }> = [
	{ label: 'Home', href: '#' },
	{ label: 'Life', href: '#life' },
	{ label: 'Works', href: '#works' },
	{ label: 'About', href: '#about' },
]

const resourceLinks: Array<{ label: string; href: string }> = [
	{ label: 'placeholder', href: '#' },
	{ label: 'placeholder', href: '#' },
	{ label: 'placeholder', href: '#' },
	{ label: 'placeholder', href: '#' },
]

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#A72703] text-white">
			<div className="w-full px-6 py-12">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
					<div className="flex flex-col gap-4 lg:pr-6 sm:col-span-2 lg:col-span-1">
						<div className="flex items-stretch gap-4 sm:gap-6">
							<img
								src="/jose-rizal-7122633.svg"
								alt="Illustration of Dr. José Rizal"
								className="w-28 sm:w-32 md:w-36 max-w-full shrink-0"
							/>
							<div className="flex min-w-0 flex-1 flex-col justify-between space-y-2">
								<div className="space-y-1.5 sm:space-y-2">
									<div className="bebas-neue-regular text-4xl font-bold tracking-wide">
										<span className="block leading-none">JOSÉ RIZAL</span>
										<span className="text-xl text-white/80">National Hero of the Philippines</span>
									</div>
								</div>
								<p className="text-xs text-white/60 atkinson-hyperlegible-mono-regular leading-tight">
									Image by{' '}
									<a
										href="https://pixabay.com/users/eugeniohansenofs-1250374/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7122633"
										target="_blank"
										rel="noopener noreferrer"
										className="underline decoration-white/40 underline-offset-2 transition-opacity duration-200 hover:opacity-80"
									>
										Eugenio Hansen, OFS
									</a>{' '}
									from{' '}
									<a
										href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7122633"
										target="_blank"
										rel="noopener noreferrer"
										className="underline decoration-white/40 underline-offset-2 transition-opacity duration-200 hover:opacity-80"
									>
										Pixabay
									</a>
								</p>
							</div>
						</div>
						<p className="text-white/80 atkinson-hyperlegible-mono-regular text-justify leading-relaxed">
							Celebrating the life, works, and legacy of José Protacio Rizal Mercado y Alonso Realonda through this digital archive.
						</p>
					</div>
					<div className="space-y-4">
						<h3 className="bebas-neue-regular text-2xl font-semibold uppercase tracking-wide">Explore</h3>
						<ul className="mt-3 space-y-2 text-lg atkinson-hyperlegible-mono-regular text-white/85">
							{primaryLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="transition-opacity duration-200 hover:opacity-80">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="bebas-neue-regular text-2xl font-semibold uppercase tracking-wide">Resources</h3>
						<ul className="mt-3 space-y-2 text-lg atkinson-hyperlegible-mono-regular text-white/85">
							{resourceLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="transition-opacity duration-200 hover:opacity-80">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-12 border-t border-white/20 pt-6 text-sm text-white/70 atkinson-hyperlegible-mono-regular">
					<p>
						All images and writings presented on this site are property of their respective owners. All images, writings, and references are used for educational and non-commercial purposes to honor the legacy of Dr. José Rizal.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
