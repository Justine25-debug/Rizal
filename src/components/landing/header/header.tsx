import React, { useEffect, useRef, useState } from 'react'

type MenuKey = 'life' | 'works'

interface DropDownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	children: React.ReactNode
	enableFade?: boolean
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, enableFade = false, children, className, ...rest }) => {
	const visibilityClasses = enableFade
		? `transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
		: (isOpen ? '' : 'hidden')

	return (
		<div
			aria-hidden={!isOpen}
			className={`absolute left-0 top-full w-full bg-[#A72703] text-white ${visibilityClasses} ${className ?? ''}`}
			{...rest}
		>
			<div className="px-6 py-4">
				{children}
			</div>
		</div>
	)
}

const NavigationItems: Array<{ label: string; href: string; menu?: MenuKey }> = [
	{ label: 'HOME', href: '#' },
	{ label: 'LIFE', href: '#', menu: 'life' },
	{ label: 'WORKS', href: '#', menu: 'works' },
	{ label: 'ABOUT', href: '#' },
]

const DropDownMenuContents: Record<MenuKey, Array<{ title: string; links: Array<{ label: string; href: string }> }>> = {
	life: [
		{
			title: 'Life',
			links: [
				{ label: 'Early Life', href: '#' },
				{ label: 'Education', href: '#' },
				{ label: 'Travels', href: '#' },
				{ label: 'Legacy', href: '#' },
			],
		},
		{
			title: 'Timeline',
			links: [
				{ label: '1861–1877', href: '#' },
				{ label: '1878–1887', href: '#' },
				{ label: '1888–1896', href: '#' },
			],
		},
	],
	works: [
		{
			title: 'Novels',
			links: [
				{ label: 'Noli Me Tángere', href: '#' },
				{ label: 'El Filibusterismo', href: '#' },
			],
		},
		{
			title: 'Essays',
			links: [
				{ label: 'To the Young Women of Malolos', href: '#' },
				{ label: 'The Philippines a Century Hence', href: '#' },
				{ label: 'On the Indolence of the Filipinos', href: '#' },
			],
		},
		{
			title: 'Others',
			links: [
				{ label: 'Poems', href: '#' },
				{ label: 'Plays', href: '#' },
				{ label: 'Unfinished Works', href: '#' },
				{ label: 'Paintings', href: '#' },
				{ label: 'Sculptures', href: '#' },
			],
		},
	],
}

const DropDownMenuColumns: Record<MenuKey, string> = {
	life: 'grid-cols-2',
	works: 'grid-cols-3',
}

const Header: React.FC = () => {
	const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isHeaderHovered, setIsHeaderHovered] = useState(false)
	const closeTimeoutRef = useRef<number | null>(null)

	const clearCloseTimeout = () => {
		if (closeTimeoutRef.current !== null) {
			window.clearTimeout(closeTimeoutRef.current)
			closeTimeoutRef.current = null
		}
	}

	const openMenu = (menu: MenuKey | null) => {
		clearCloseTimeout()
		setActiveMenu(menu)
	}

	const scheduleClose = () => {
		clearCloseTimeout()
		closeTimeoutRef.current = window.setTimeout(() => {
			setActiveMenu(null)
		}, 200)
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 16)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (!isScrolled) {
			setIsHeaderHovered(false)
		}
	}, [isScrolled])

	useEffect(() => {
		return () => {
			clearCloseTimeout()
		}
	}, [])

	const isHoveringWhileScrolled = isScrolled && (isHeaderHovered || activeMenu !== null)
	const textColorClass = isHoveringWhileScrolled || !isScrolled ? 'text-white' : 'text-[#962302]'
	const signatureImageClasses = `signature-image ${isScrolled && !isHoveringWhileScrolled ? 'scrolled' : ''}`
	const navTextColor = isHoveringWhileScrolled || !isScrolled ? 'text-white' : 'text-[#962302]'
	const headerBackgroundClass = isScrolled
		? (isHoveringWhileScrolled ? 'bg-[#A72703] shadow-md' : 'bg-transparent shadow-none')
		: 'bg-[#A72703] shadow-md'
	const colorTransitionClass = 'transition-colors duration-300'

	const handleHeaderMouseEnter = () => {
		clearCloseTimeout()
		if (isScrolled) {
			setIsHeaderHovered(true)
		}
	}

	const handleHeaderMouseLeave = () => {
		setIsHeaderHovered(false)
		scheduleClose()
	}

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 w-full ${headerBackgroundClass}`}
				onMouseEnter={handleHeaderMouseEnter}
				onMouseLeave={handleHeaderMouseLeave}
			>
				<div
					className="relative mx-auto flex h-20 w-full items-center justify-between px-6"
					onMouseLeave={scheduleClose}
				>
				{/* Left*/}
				<div className={`signature-toggle font-bold text-3xl sm:text-4xl bebas-neue-regular ${colorTransitionClass} ${textColorClass}`}>
					<span className="signature-text block">JOSÉ RIZAL</span>
					<img
						src="/Jose-Rizal_Signature.svg"
						alt="José Rizal's signature"
						className={signatureImageClasses}
					/>
				</div>

				{/* Right*/}
				<nav className="h-full">
					{/* Responsive adjustments: smaller font and spacing on narrow screens to prevent overflow */}
					<ul className={`flex h-full items-center space-x-4 sm:space-x-6 text-xl sm:text-2xl atkinson-hyperlegible-mono-regular ${colorTransitionClass} ${navTextColor}`}>
						{NavigationItems.map((item) => (
							<li
								key={item.label}
								onMouseEnter={() => openMenu(item.menu ?? null)}
								onMouseLeave={item.menu ? scheduleClose : undefined}
							>
								<a href={item.href} className="animated-underline relative flex items-center justify-center">
									<span className="block">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				<DropDownMenu
					isOpen={activeMenu !== null}
					onMouseEnter={clearCloseTimeout}
					onMouseLeave={scheduleClose}
				>
					{activeMenu && (
						<div className={`grid gap-6 ${DropDownMenuColumns[activeMenu]}`}>
							{DropDownMenuContents[activeMenu].map((column) => (
								<div key={column.title} className="group">
									<h4 className="dropdown-title font-bold bebas-neue-regular text-2xl">{column.title}</h4>
									<ul className="mt-2 space-y-1 text-white/90">
										{column.links.map((link) => (
											<li key={link.label}>
												<a href={link.href} className="dropdown-link block">{link.label}</a>
											</li>
											))}
									</ul>
								</div>
							))}
						</div>
					)}
				</DropDownMenu>
				</div>
			</header>
			<div className="h-20 w-full" aria-hidden="true" />
		</>
	)
}

export default Header
