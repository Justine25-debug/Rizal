import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as f3 from 'family-chart'
import 'family-chart/styles/family-chart.css'
import './family-chart-overrides.css'
import { rizalFamilyTree, type FamilyNode } from './family-data'

type ChartDatum = {
	id: string
	data: {
		gender: 'M' | 'F'
		'first name': string
		'last name': string
	}
	rels: {
		parents: string[]
		spouses: string[]
		children: string[]
	}
}

const VISIBLE_ROWS = 6
const CARD_WIDTH = 280
const CARD_HEIGHT = 96
const CARD_X_SPACING = 340
const CARD_Y_SPACING = 170
const INITIAL_ZOOM = 2.4
const MAIN_PERSON_ID = 'person-root'
const REFERENCE_IMAGE_URL = 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-Tree.jpg'
const REFERENCE_SOURCE_URL = 'https://philippinefolklifemuseum.org/collection/jose-rizal/attachment/rizal-family-tree/#'

const FAMILY_PHOTOS: Array<{ name: string; src: string }> = [
	{ name: 'Francisco Mercado', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-01-Father-Francisco-Mercado-150x150.jpg' },
	{ name: 'Teodora Alonso', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-01-Mother-Teodora-Alonzo-150x150.jpg' },
	{ name: 'Saturnina Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Saturnina-150x150.jpg' },
	{ name: 'Paciano Rizal (Photo 1)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Brother-Paciano2-150x150.jpg' },
	{ name: 'Paciano Rizal (Photo 2)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Brother-Paciano-150x150.jpg' },
	{ name: 'Narcisa Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Narcisa-150x150.jpg' },
	{ name: 'Olimpia Rizal (Photo 1)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Olympla2-150x150.jpg' },
	{ name: 'Lucia Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Lucia-150x150.jpg' },
	{ name: 'Maria Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Maria-150x150.jpg' },
	{ name: 'Josefa Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Josefa-150x150.jpg' },
	{ name: 'José Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-at-29-150x150.jpg' },
	{ name: 'Soledad Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Soledad-150x150.jpg' },
	{ name: 'Olimpia Rizal (Photo 2)', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Olympla-150x150.jpg' },
	{ name: 'Trinidad Rizal', src: 'https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-02-Sister-Trinidad-150x150.jpg' },
]

const spouseToList = (spouse?: string | string[]) => {
	if (!spouse) return []
	return Array.isArray(spouse) ? spouse : [spouse]
}

const buildFamilyChartData = (root: FamilyNode) => {
	const byId = new Map<string, ChartDatum>()

	const ensurePerson = (id: string, name: string, gender: 'M' | 'F') => {
		if (byId.has(id)) return byId.get(id)!

		const person: ChartDatum = {
			id,
			data: {
				gender,
				'first name': name,
				'last name': '',
			},
			rels: {
				parents: [],
				spouses: [],
				children: [],
			},
		}

		byId.set(id, person)
		return person
	}

	const connectSpouses = (a: ChartDatum, b: ChartDatum) => {
		if (!a.rels.spouses.includes(b.id)) a.rels.spouses.push(b.id)
		if (!b.rels.spouses.includes(a.id)) b.rels.spouses.push(a.id)
	}

	const connectParentChild = (parent: ChartDatum, child: ChartDatum) => {
		if (!parent.rels.children.includes(child.id)) parent.rels.children.push(child.id)
		if (!child.rels.parents.includes(parent.id)) child.rels.parents.push(parent.id)
	}

	const walk = (node: FamilyNode, path: string, parentIds: string[] = []) => {
		const personId = `person-${path}`
		const person = ensurePerson(personId, node.name, 'M')

		for (const parentId of parentIds) {
			const parent = byId.get(parentId)
			if (!parent) continue
			connectParentChild(parent, person)
		}

		const spouseIds: string[] = []
		spouseToList(node.spouse).forEach((spouseName, index) => {
			const spouseId = `${personId}-spouse-${index}`
			const spouse = ensurePerson(spouseId, spouseName, 'F')
			connectSpouses(person, spouse)
			spouseIds.push(spouseId)
		})

		node.marriages?.forEach((marriage, marriageIndex) => {
			const spouseId = `${personId}-marriage-spouse-${marriageIndex}`
			const spouse = ensurePerson(spouseId, marriage.spouse, 'F')
			connectSpouses(person, spouse)

			marriage.children?.forEach((child, childIndex) => {
				walk(child, `${path}-m${marriageIndex}-c${childIndex}`, [personId, spouseId])
			})
		})

		const childParentIds = spouseIds.length > 0 ? [personId, spouseIds[0]] : [personId]
		node.children?.forEach((child, index) => {
			walk(child, `${path}-${index}`, childParentIds)
		})
	}

	walk(root, 'root')
	return Array.from(byId.values())
}

const Family: React.FC = () => {
	const chartContainerRef = useRef<HTMLDivElement | null>(null)
	const chartData = useMemo(() => buildFamilyChartData(rizalFamilyTree), [])
	const [showReferenceImage, setShowReferenceImage] = useState(false)

	useEffect(() => {
		document.title = 'Family - José Rizal'
	}, [])

	useEffect(() => {
		const container = chartContainerRef.current
		if (!container) return

		container.innerHTML = ''

		const chart = f3.createChart(container, chartData)
		chart
			.setTransitionTime(400)
			.setOrientationVertical()
			.setCardXSpacing(CARD_X_SPACING)
			.setCardYSpacing(CARD_Y_SPACING)
			.setCardHtml()
			.setStyle('rect')
			.setMiniTree(false)
			.setCardDisplay(['first name'])
			.setCardDim({
				w: CARD_WIDTH,
				h: CARD_HEIGHT,
				text_x: 16,
				text_y: 30,
				img_w: 0,
				img_h: 0,
				img_x: 0,
				img_y: 0,
				showImage: false,
			})

		chart.updateTree({ initial: true, tree_position: 'fit' })
		chart.updateMainId(MAIN_PERSON_ID)
		chart.updateTree({ tree_position: 'main_to_middle' })

		requestAnimationFrame(() => {
			f3.handlers.zoomTo(chart.svg, INITIAL_ZOOM)
			requestAnimationFrame(() => {
				chart.updateTree({ tree_position: 'main_to_middle' })
			})
		})

		return () => {
			container.innerHTML = ''
		}
	}, [chartData])

	return (
		<main className="">
			<section className="mx-auto w-full max-w-8xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="bebas-neue-regular text-5xl font-semibold tracking-wide text-[#A72703] sm:text-6xl">
					Rizal Family Tree
				</h1>
				<div className="relative left-1/2 mt-3 h-px w-[calc(100vw-3rem)] -translate-x-1/2 bg-[#A72703]/40 sm:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]" />

				<p className="atkinson-hyperlegible-mono-regular mt-6 max-w-4xl text-base leading-relaxed text-[#3D2A1C] sm:text-lg">
					A hierarchical view of José Rizal&apos;s immediate and extended family,
					starting from Francisco Mercado and Teodora Alonso.
				</p>

				<div className="relative mx-auto mt-8 max-w-8xl overflow-auto rounded-xl border border-[#A72703]/15 bg-[#FFF8F5] p-4 sm:p-6">
					<button
						type="button"
						onClick={() => setShowReferenceImage(true)}
						className="atkinson-hyperlegible-mono-regular absolute left-4 top-4 z-10 rounded-md border border-[#A72703]/40 bg-white px-3 py-2 text-sm font-semibold text-[#A72703] shadow-sm transition hover:bg-[#FFF1EA]"
					>
						View original family tree image
					</button>

					<div className="min-w-272 pt-14">
						<div
							ref={chartContainerRef}
							className="f3 f3-cont rizal-family-chart"
							style={
								{
									'--visible-rows': VISIBLE_ROWS,
									'--card-y-spacing': `${CARD_Y_SPACING}px`,
									'--card-width': `${CARD_WIDTH}px`,
									'--card-height': `${CARD_HEIGHT}px`,
								} as React.CSSProperties
							}
						/>
					</div>
				</div>

				<section className="mt-10">
					<h2 className="bebas-neue-regular text-3xl tracking-wide text-[#A72703] sm:text-4xl">
						Rizal Family Photos
					</h2>
					<p className="atkinson-hyperlegible-mono-regular mt-2 text-sm leading-relaxed text-[#3D2A1C]">
						Source of the images:{' '}
						<a
							href="https://philippinefolklifemuseum.org/collection/jose-rizal/"
							target="_blank"
							rel="noreferrer"
							className="font-semibold text-[#A72703] underline"
						>
							philippinefolklifemuseum.org
						</a>
					</p>
					<div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
						{FAMILY_PHOTOS.map((photo) => (
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

				<section className="mt-10">
					<img
						src="https://philippinefolklifemuseum.org/wp-content/uploads/Rizal-Family-Sisters-1024x919.jpg"
						alt="Rizal Family Sisters"
						className="h-auto w-full rounded-xl border border-[#A72703]/20 bg-white shadow-sm"
						loading="lazy"
						decoding="async"
					/>
				</section>

				{showReferenceImage && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
						<div className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-xl bg-white p-4 shadow-2xl sm:p-6">
							<div className="mb-3 flex items-center justify-between gap-3">
								<h2 className="bebas-neue-regular text-3xl tracking-wide text-[#A72703]">Rizal Family Tree (Reference)</h2>
								<button
									type="button"
									onClick={() => setShowReferenceImage(false)}
									className="rounded-md border border-[#A72703]/40 px-3 py-1.5 text-sm font-semibold text-[#A72703] hover:bg-[#FFF1EA]"
								>
									Close
								</button>
							</div>

							<img
								src={REFERENCE_IMAGE_URL}
								alt="Reference image of the Rizal family tree"
								className="h-auto w-full rounded-lg border border-[#A72703]/20"
							/>

							<p className="atkinson-hyperlegible-mono-regular mt-4 text-sm leading-relaxed text-[#3D2A1C]">
								This reference image came from the Philippine Folk Life Museum website. Source:{' '}
								<a
									href={REFERENCE_SOURCE_URL}
									target="_blank"
									rel="noreferrer"
									className="font-semibold text-[#A72703] underline"
								>
									philippinefolklifemuseum.org
								</a>
							</p>
						</div>
					</div>
				)}
			</section>
		</main>
	)
}

export default Family

