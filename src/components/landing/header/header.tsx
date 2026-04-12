import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


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

type NavigationItem = { label: string; href: string; menu?: MenuKey; isRoute?: boolean }

const NavigationItems: NavigationItem[] = [
	{ label: 'HOME', href: '/', isRoute: true },
	{ label: 'LIFE', href: '/life', menu: 'life', isRoute: true },
	{ label: 'WORKS', href: '/works', menu: 'works', isRoute: true },
	{ label: 'ABOUT', href: '/about', isRoute: true },
]

type DropDownMenuColumn = {
	title: string
	titleHref?: string
	links: Array<{ label: string; href: string }>
}

const DropDownMenuContents: Record<MenuKey, DropDownMenuColumn[]> = {
	life: [
		{
			title: 'Life',
			titleHref: '/life',
			links: [
				{ label: 'Early Life and Education', href: '/life?tab=early-life' },
				{ label: 'First Travel to Europe and Propaganda Work', href: '/life?tab=first-travel' },
				{ label: 'Return to the Philippines and Second Trip Abroad', href: '/life?tab=return' },
				{ label: 'Final Return, Exile, and Execution', href: '/life?tab=final-return' },
			],
		},
		{
			title: 'Family and Relationships',
			links: [
				{ label: 'Family Tree', href: '/life/family' },
				{ label: 'The Women in the Life of Rizal', href: '/life/women-of-rizal' },
			],
		},
	],
	works: [
    {
        title: 'Novels',
		titleHref: '/works/novels',
        links: [
			{ label: 'Noli Me Tangere', href: '/works/novels' },
			{ label: 'El Filibusterismo', href: '/works/novels' }
        ]
    },
    {
        title: 'Poetry',
		titleHref: '/works/poetry',
        links: [
			{ label: 'Sa Aking Mga Kabata', href: '/works/poetry' },
			{ label: 'Por la Educacion Recibe Lustre la Patria', href: '/works/poetry' },
			{ label: 'Alianza Intima Entre la Religion y la Buena Educacion', href: '/works/poetry' },
			{ label: 'A la Juventud Filipina', href: '/works/poetry' },
			{ label: 'El Combate: Urbiztondo, Terror de Jolo', href: '/works/poetry' },
			{ label: 'A la Educacion', href: '/works/poetry' },
			{ label: 'El Heroismo: Canto Epico', href: '/works/poetry' },
			{ label: 'Me Piden Versos', href: '/works/poetry' },
			{ label: 'A las Flores de Heidelberg', href: '/works/poetry' },
			{ label: 'Canto De Maria Clara', href: '/works/poetry' },
			{ label: 'Himno al Trabajo', href: '/works/poetry' },
			{ label: 'A mi Musa', href: '/works/poetry' },
			{ label: 'A Don Ricardo Carcinero', href: '/works/poetry' },
			{ label: 'Mi Retiro', href: '/works/poetry' },
			{ label: 'Canto del Viajero', href: '/works/poetry' },
			{ label: 'Ultimo Adios', href: '/works/poetry' }
        ]
    },
    {
        title: 'Essays and Articles',
		titleHref: '/works/essays-and-articles',
        links: [
			{ label: 'Por Telefono', href: '/works/essays-and-articles' },
			{ label: 'La Vision del Fray Rodriguez', href: '/works/essays-and-articles' },
			{ label: 'El Amor Patrio', href: '/works/essays-and-articles' },
			{ label: 'Sa mga Kababayang Dalaga sa Malolos', href: '/works/essays-and-articles' },
			{ label: 'Sobre La Indolencia De Los Filipinos', href: '/works/essays-and-articles' },
			{ label: 'Filipinas Dentro De Cien Anos', href: '/works/essays-and-articles' },
			{ label: 'The Town School in the Philippines', href: '/works/essays-and-articles' },
			{ label: 'Juan Luna', href: '/works/essays-and-articles' },
			{ label: 'The Lord Gazes at the Philippines', href: '/works/essays-and-articles' },
			{ label: 'The Ancient Tagalog Nobility', href: '/works/essays-and-articles' },
			{ label: 'The Tortoise and the Monkey', href: '/works/essays-and-articles' },
			{ label: 'Suan\'s animals', href: '/works/essays-and-articles' },
			{ label: 'Reminiscences of a Cock', href: '/works/essays-and-articles' },
			{ label: 'Pompous Gobernadorcillo', href: '/works/essays-and-articles' },
			{ label: 'The sense of the beautiful', href: '/works/essays-and-articles' },
			{ label: 'On Travel (Los Viajes)', href: '/works/essays-and-articles' },
			{ label: 'Revista de Madrid', href: '/works/essays-and-articles' },
			{ label: 'Memories', href: '/works/essays-and-articles' },
			{ label: 'The Significance of Palm Sunday', href: '/works/essays-and-articles' },
			{ label: 'Marie Colobiere: the Pistol of the Little Baroness', href: '/works/essays-and-articles' },
			{ label: 'The Kite and the Hen', href: '/works/essays-and-articles' },
			{ label: 'A Soiree at the home of Mr B', href: '/works/essays-and-articles' },
			{ label: 'Como se Engana la Patria', href: '/works/essays-and-articles' },
			{ label: 'La Verdad para Todos', href: '/works/essays-and-articles' }
        ]
    },
    {
        title: 'Plays, Speeches, Translations, and Other Works',
		titleHref: '/works/other-works',
        links: [
			{ label: 'El Consejo de los Dioses', href: '/works/other-works' },
			{ label: 'Junto Al Pasig', href: '/works/other-works' },
			{ label: 'Annotations to Antonio de Morga\'s Sucesos de las Islas Filipinas', href: '/works/other-works' },
			{ label: 'Tagalische Verskunst', href: '/works/other-works' },
			{ label: 'Arts Poetica Tagala', href: '/works/other-works' },
			{ label: 'Translations of Waitz\'s Anthropology of Primitive Peoples and General Ethnography', href: '/works/other-works' },
			{ label: 'Translation of Schiller\'s William Tell into Tagalog', href: '/works/other-works' },
			{ label: 'Statutes/Constitution of La Liga Filipina', href: '/works/other-works' },
			{ label: 'Brindis', href: '/works/other-works' },
			{ label: 'Response to the welcome speech of Joseph Krombhols', href: '/works/other-works' }
        ]
    }
]
}

const DropDownMenuColumns: Record<MenuKey, string> = {
	life: 'grid-cols-2',
	works: 'grid-cols-4',
}

const WORKS_SECTION_HASH_BY_COLUMN_TITLE: Record<string, string> = {
	Novels: 'novels',
	Poetry: 'poetry',
	'Essays and Articles': 'essays-and-articles',
	'Plays, Speeches, Translations, and Other Works': 'other-works',
}

const resolveDropDownHref = (href: string, columnTitle: string, itemLabel?: string) => {
	const worksSectionHash = WORKS_SECTION_HASH_BY_COLUMN_TITLE[columnTitle]
	if (!worksSectionHash) return href

	const query = itemLabel ? `?item=${encodeURIComponent(itemLabel)}` : ''
	return `/works${query}#${worksSectionHash}`
}

const Header: React.FC = () => {
	const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null)
	const [isScrolled, setIsScrolled] = useState(false)
	const [isHeaderHovered, setIsHeaderHovered] = useState(false)
	const closeTimeoutRef = useRef<number | null>(null)
	const openTimeoutRef = useRef<number | null>(null)
	const pendingMenuRef = useRef<MenuKey | null>(null)
	const location = useLocation()
	const isTimelinePage = location.pathname.startsWith('/timeline')

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const clearCloseTimeout = () => {
		if (closeTimeoutRef.current !== null) {
			window.clearTimeout(closeTimeoutRef.current)
			closeTimeoutRef.current = null
		}
	}

	const clearOpenTimeout = () => {
		if (openTimeoutRef.current !== null) {
			window.clearTimeout(openTimeoutRef.current)
			openTimeoutRef.current = null
		}
		pendingMenuRef.current = null
	}

	const openMenu = (menu: MenuKey | null) => {
		clearCloseTimeout()
		clearOpenTimeout()
		setActiveMenu(menu)
	}

	const scheduleOpenMenu = (menu: MenuKey) => {
		clearCloseTimeout()
		clearOpenTimeout()
		pendingMenuRef.current = menu
		openTimeoutRef.current = window.setTimeout(() => {
			if (pendingMenuRef.current === menu) {
				setActiveMenu(menu)
			}
		}, 100)
	}

	const scheduleClose = () => {
		clearOpenTimeout()
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
			clearOpenTimeout()
		}
	}, [])

	const isHeaderActive = isHeaderHovered || activeMenu !== null
	const isHoveringWhileScrolled = isScrolled && isHeaderActive

	let textColorClass = 'text-white'
	let navTextColor = 'text-white'
	let headerBackgroundClass = 'bg-[#A72703] shadow-md'
	let signatureImageClasses = 'signature-image'

	textColorClass = isHoveringWhileScrolled || !isScrolled ? 'text-white' : 'text-[#962302]'
	navTextColor = textColorClass
	headerBackgroundClass = isScrolled
		? (isHoveringWhileScrolled ? 'bg-[#A72703] shadow-md' : 'bg-transparent shadow-none')
		: 'bg-[#A72703] shadow-md'
	if (isScrolled && !isHoveringWhileScrolled) {
		signatureImageClasses = 'signature-image scrolled'
	}
	const colorTransitionClass = 'transition-colors duration-300'

	const handleHeaderMouseEnter = () => {
		clearCloseTimeout()
		clearOpenTimeout()
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
				className={`fixed top-0 left-0 right-0 z-10000 w-full ${headerBackgroundClass}`}
				onMouseEnter={handleHeaderMouseEnter}
				onMouseLeave={handleHeaderMouseLeave}
			>
				<div
					className="relative mx-auto flex h-20 w-full items-center justify-between px-6"
					onMouseLeave={scheduleClose}
				>
				{/* Left*/}
				<NavLink
					to="/"
					end
					className={`signature-toggle font-bold text-3xl sm:text-4xl bebas-neue-regular ${colorTransitionClass} ${textColorClass}`}
					onClick={() => {
						setActiveMenu(null)
						scrollToTop()
					}}
				>
					<span className="signature-text block">JOSÉ RIZAL</span>
					<img
						src={`${import.meta.env.BASE_URL}Jose-Rizal_Signature.svg`}
						alt="José Rizal's signature"
						className={signatureImageClasses}
					/>
				</NavLink>

				{/* Right*/}
				<nav className="h-full">
					{/* Responsive adjustments: smaller font and spacing on narrow screens to prevent overflow */}
					<ul className={`flex h-full items-center space-x-4 sm:space-x-6 text-xl sm:text-2xl atkinson-hyperlegible-mono-regular ${colorTransitionClass} ${navTextColor}`}>
						{NavigationItems.map((item) => (
							<li
								key={item.label}
								onMouseEnter={() => {
									if (item.menu) {
										if (activeMenu && activeMenu !== item.menu) {
											scheduleOpenMenu(item.menu)
										} else {
											openMenu(item.menu)
										}
									} else {
										// Keep any currently open dropdown open while still hovering the header/nav.
										clearCloseTimeout()
										clearOpenTimeout()
									}
								}}
								onMouseLeave={item.menu ? scheduleClose : undefined}
							>
								{item.isRoute ? (
									<NavLink
										to={item.href}
										end={item.href === '/'}
										className="animated-underline relative flex items-center justify-center"
										onClick={() => {
											setActiveMenu(null)
											scrollToTop()
										}}
									>
										<span className="block">{item.label}</span>
									</NavLink>
								) : (
									<a
										href={item.href}
										aria-current={item.menu === 'life' && isTimelinePage ? 'page' : undefined}
										className="animated-underline relative flex items-center justify-center"
										onClick={(event) => {
											event.preventDefault()
											if (item.menu) {
												openMenu(item.menu)
											} else {
												setActiveMenu(null)
											}
											scrollToTop()
										}}
									>
										<span className="block">{item.label}</span>
									</a>
								)}
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
									{column.titleHref ? (
										(() => {
											const resolvedTitleHref = resolveDropDownHref(column.titleHref, column.title)
											return (
										<NavLink
											to={resolvedTitleHref}
											className="dropdown-title font-bold bebas-neue-regular text-2xl"
											onClick={() => {
												setActiveMenu(null)
												scrollToTop()
											}}
										>
											{column.title}
										</NavLink>
											)
										})()
									) : (
										<h4 className="dropdown-title font-bold bebas-neue-regular text-2xl">{column.title}</h4>
									)}
									{(() => {
										const useTwoColumns = column.links.length >= 10
										if (!useTwoColumns) {
											return (
												<ul className="mt-2 space-y-1 text-white/90">
													{column.links.map((link) => (
														<li key={link.label}>
																{resolveDropDownHref(link.href, column.title, link.label).startsWith('/') ? (
																<NavLink
																		to={resolveDropDownHref(link.href, column.title, link.label)}
																	className="dropdown-link block"
																	onClick={() => {
																		setActiveMenu(null)
																		scrollToTop()
																	}}
																>
																	{link.label}
																</NavLink>
															) : (
																	<a href={resolveDropDownHref(link.href, column.title, link.label)} className="dropdown-link block">{link.label}</a>
															)}
														</li>
													))}
												</ul>
											)
										}

										const columns: [Array<{ label: string; href: string }>, Array<{ label: string; href: string }>] = [[], []]
										for (let i = 0; i < column.links.length; i += 1) {
											columns[i % 2].push(column.links[i])
										}

										return (
											<div className="mt-2 grid grid-cols-2 gap-x-6 text-white/90">
												{columns.map((links, columnIndex) => (
													<ul key={columnIndex} className="space-y-1">
														{links.map((link) => (
															<li key={link.label}>
																{resolveDropDownHref(link.href, column.title, link.label).startsWith('/') ? (
																	<NavLink
																		to={resolveDropDownHref(link.href, column.title, link.label)}
																		className="dropdown-link block"
																		onClick={() => {
																			setActiveMenu(null)
																			scrollToTop()
																		}}
																	>
																		{link.label}
																	</NavLink>
																) : (
																	<a href={resolveDropDownHref(link.href, column.title, link.label)} className="dropdown-link block">{link.label}</a>
																)}
															</li>
														))}
													</ul>
												))}
											</div>
										)
									})()}
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
