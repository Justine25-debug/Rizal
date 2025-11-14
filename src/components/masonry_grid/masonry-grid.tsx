import Masonry from 'react-masonry-css'
import { forwardRef, memo } from 'react'

interface MasonryImage {
    src: string
    alt: string
    title: string
}

const masonryColumns: MasonryImage[][] = [
    [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Imitation_of_Japanese_art_by_Jose_Rizal_%28circa_1888%29.jpg",
            alt: 'Imitation of Japanese art',
            title: '2-dimensional artwork',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Noli_Me_Tangere.jpg',
            alt: 'Cover of Noli me Tangere',
            title: '2-dimensional artwork',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/The_Monkey_and_The_Turtle_3.jpg',
            alt: 'The Turtle and the Monkey',
            title: '2-dimensional artwork',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Portrait_of_Saturnina_Rizal_Hidalgo_by_Dr._Jose_P._Rizal.png',
            alt: 'Portrait of Saturnina Rizal',
            title: '2-dimensional artwork',
        },
    ],
    [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Untitled_self-portrait_by_Jose_Rizal.jpg',
            alt: 'Untitled self-portrait',
            title: '2-dimensional artwork',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Vista_de_Gendarmenmarket_en_Berlin_by_Jose_P._Rizal.jpg/1280px-Vista_de_Gendarmenmarket_en_Berlin_by_Jose_P._Rizal.jpg',
            alt: 'Vista de Gendarmenmarket en Berlin',
            title: '2-dimensional artwork',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Clay_statuette_of_San_Antonio_de_Padue_by_Dr._Jose_Rizal.png',
            alt: 'San Francisco de Padua',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bust_of_Fr._Jose_Guerrico%2C_Jesuit_Teacher_from_Ateneo_Municipal_by_Dr._Jose_P._Rizal.png/120px-Bust_of_Fr._Jose_Guerrico%2C_Jesuit_Teacher_from_Ateneo_Municipal_by_Dr._Jose_P._Rizal.png',
            alt: 'Bust of Father Jose Guerrico',
            title: 'Sculpture',
        },
    ],
    [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Model_of_a_head_of_a_dapitan_girl_by_Dr._Jose_Rizal.png/120px-Model_of_a_head_of_a_dapitan_girl_by_Dr._Jose_Rizal.png',
            alt: 'Model head of a Dapitan girl',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bust_of_Capt_Ricardo_Carcinero%2C_sculpture_by_Jose_Rizal.jpg/250px-Bust_of_Capt_Ricardo_Carcinero%2C_sculpture_by_Jose_Rizal.jpg',
            alt: 'Bust of Ricardo Carcinero',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/San_Pablo_Ermita%C3%B1o.jpg/250px-San_Pablo_Ermita%C3%B1o.jpg',
            alt: 'San Pablo el Ermitaño',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/La_venganza_de_la_madre_%28The_Mother%27s_Revenge%29.jpg/250px-La_venganza_de_la_madre_%28The_Mother%27s_Revenge%29.jpg',
            alt: 'La venganza dela madre (A Mother\'s Revenge)',
            title: 'Sculpture',
        },
    ],
    [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prometheus_Bound_sculpture.jpg/250px-Prometheus_Bound_sculpture.jpg',
            alt: 'Prometheus Bound',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/The_Triumph_of_Death_Rizal_sculpture.jpg/250px-The_Triumph_of_Death_Rizal_sculpture.jpg',
            alt: 'The Triumph of Death over Life',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Copy_of_Triumph_of_Science_Rizal_sculpture.jpg/250px-Copy_of_Triumph_of_Science_Rizal_sculpture.jpg',
            alt: 'The Triumph of Science over Death',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Wooden_bust_of_Francisco_Mercado_by_Dr._Jose_Rizal.png/60px-Wooden_bust_of_Francisco_Mercado_by_Dr._Jose_Rizal.png',
            alt: 'Bust of Francisco Mercado',
            title: 'Sculpture',
        },
    ],
    [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Josephine_Bracken_wood_carving.jpg/120px-Josephine_Bracken_wood_carving.jpg',
            alt: 'Josephine Bracken (Bas Relief)',
            title: 'Sculpture',
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sacred_Heart_of_Jesus_by_Dr._Jose_P._Rizal.png/60px-Sacred_Heart_of_Jesus_by_Dr._Jose_P._Rizal.png',
            alt: 'Sacred Heart of Jesus',
            title: 'Sculpture',
        },
    ],
]

const allImages: MasonryImage[] = masonryColumns.flat()

const shuffledImages = [...allImages].sort(() => Math.random() - 0.5)

const ArchiveCard = memo(({ image }: { image: MasonryImage }) => (
    <div className="archive-card relative overflow-hidden rounded-2xl shadow-sm">
        <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="archive-card__image w-full h-auto"
        />
        <div className="archive-card__overlay" />
        <div className="archive-card__label pointer-events-none absolute bottom-3 left-3 right-3 rounded-lg px-3 py-2 text-left text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] box-border">
                <p className="text-[12px] sm:text-xs md:text-sm lg:text-base font-semibold leading-tight whitespace-normal wrap-break-word">{image.alt}</p>
                <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-white/80 whitespace-normal wrap-break-word">{image.title}</p>
            </div>
    </div>
))
ArchiveCard.displayName = 'ArchiveCard'

const MasonryGrid = forwardRef<HTMLElement>((props, ref) => {
    const breakpointColumns = {
        default: 5,  
        1024: 4,
        768: 3,      
        500: 2       
    }

    return (
        <section ref={ref} className="bg-white py-10" {...props}>
            <div className="mx-auto max-w-8xl px-20">
                <h2 className="text-3xl font-semibold uppercase text-[#A72703] bebas-neue-regular">
                    Visual Archive
                </h2>
                <p className="mt-2 text-lg text-gray-600 atkinson-hyperlegible-mono-regular">
                    A collection of José Rizal's artistic works.
                </p>

                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex gap-4 mt-10"
                    columnClassName="masonry-column space-y-4"
                >
                    {shuffledImages.map((image) => (
                        <ArchiveCard key={image.src} image={image} />
                    ))}
                </Masonry>
            </div>
        </section>
    )
})

MasonryGrid.displayName = 'MasonryGrid'

export default MasonryGrid
