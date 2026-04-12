export interface FamilyMarriage {
	spouse: string
	children?: FamilyNode[]
}

export interface FamilyNode {
	name: string
	spouse?: string | string[]
	children?: FamilyNode[]
	marriages?: FamilyMarriage[]
}

export const rizalFamilyTree: FamilyNode = {
	name: 'Francisco Mercado',
	spouse: 'Teodora Alonso',
	children: [
		{
			name: 'Saturnina',
			spouse: 'Manuel Hidalgo',
			children: [
				{ name: 'Augusto' },
				{ name: 'Amelia' },
				{ name: 'Abelardo' },
                { name: 'Alfredo', spouse: 'Aurora Tiaoqui',
                    children: [
                        { name: 'Lourdes' },
						{ name: 'Armando' },
						{ name: 'Angel' },
                    ]
                },
				{
					name: 'Adela',
					spouse: 'Jose Ver',
					children: [
						{ name: 'Aurora', spouse: 'Felix Gonzales'},
						{ name: 'Purisima' },
						{ name: 'Emma', spouse: 'Ramon Reyes' },
                        { name: 'Bernardino' },
						{ name: 'Jose' },						
					],
				},
			],
		},
		{
			name: 'Lucia',
			spouse: 'Mariano Herbosa',
			children: [
                { name: 'Paz' },
                { name: 'Virginia' },
				{
					name: 'Delfina',
					spouse: 'Salvador Natividad',
                    children: [ { name: "Paz"} ],
				},
				{ name: 'Jose' },
				{ name: 'Concepcion' },
				{ name: 'Patrocinio' },
				{
					name: 'Teodosio',
					spouse: 'Lucina Vytingco',
					children: [
						{ name: 'Luis', spouse: 'Emiliana Angeles' },
						{ name: 'Lucia', spouse: 'Antonio Arcega' },
						{ name: 'Jose' },
					],
				},
				{
					name: 'Estanislao',
					marriages: [
						{
							spouse: 'Felicidad Montes',
							children: [
								{ name: 'Concepcion', spouse: 'Escolastico Duterta' },
								{ name: 'Mariano', spouse: 'Evelina Garcia' },
								{ name: 'Estanislao Jr.', spouse: 'Juana Javier Paz Cabrera' },
								{ name: 'Felicidad' },
								{ name: 'Paz' },
								{ name: 'Elisa' },
								{ name: 'Angelina' },
							],
						},
						{
							spouse: 'Fortuna Mendoza',
							children: [
								{ name: 'Francisco', spouse: 'Zenaida Guidote' },
								{ name: 'Delfina' },
								{ name: 'Rafael' },
								{ name: 'Enrique' },
							],
						},
					],
				},
			],
		},
		{
			name: 'Maria',
			spouse: 'Daniel Cruz',
			children: [
				{
					name: 'Encarnacion',
					spouse: 'Rosendo Banaad',
					children: [
						{ name: 'Maria', spouse: 'Roberto Laurel' },
						{ name: 'Paz', spouse: 'Bienvenido Laurel' },
						{ name: 'Clemencia' },
						{ name: 'Mercedes' },
						{ name: 'Simeon' },
					],
				},
				{ name: 'Petrona' },
				{
					name: 'Mauricio',
					spouse: 'Concepcion Arguelles',
					children: [
						{ name: 'Ismael', spouse: 'Carmen Guerrero' },
						{ name: 'Caridad', spouse: 'Pedro Syquia' },
						{ name: 'Fe', spouse: 'Vladimir Gonzalez' },
						{ name: 'Esperanza' },
						{ name: 'Hilda', spouse: 'Benjamin Aldaba' },
					],
				},
				{ name: 'Paz' },
				{ name: 'Prudencio' },
			],
		},
		{ name: 'Concepcion' },
		{ name: 'Trinidad' },
		{
			name: 'Paciano',
			spouse: 'Severina Decena',
		},
		{
			name: 'Narcisa',
			spouse: 'Antonino Lopez',
			children: [
				{ name: 'Fidela' },
				{ name: 'Arsenio' },
				{ name: 'Francisco' },
				{
					name: 'Leoncio',
					spouse: 'Natividad Arguelles',
					children: [
						{ name: 'Leandro' },
						{ name: 'Natividad', spouse: 'Vicente Francisco' },
						{ name: 'Carmen', spouse: 'Ricardo Consunji' },
						{ name: 'Asuncion', spouse: 'Antonio Bantug' },
					],
				},
				{ name: 'Consuelo' },
				{ name: 'Isabel' },
				{ name: 'Angelica', spouse: 'Benito Abreu', children: [{ name: 'Ana', spouse: 'Conrado Garcia' }] },
				{ name: 'Emilio' },
				{
					name: 'Antonio',
					spouse: 'Emiliana Rizal',
					children: [
						{ name: 'Edmundo', spouse: 'Rufina de Guzman' },
						{ name: 'Francisco II', spouse: 'Mabait Concepcion' },
                        { name: 'Francisco I'},
						{ name: 'Eugenia', spouse: 'Vivencio Villaruz' },
						{ name: 'Jose II', spouse: 'Elena Talao', children: [{ name: 'Jose I' }] },
					],
				},
			],
		},
		{
			name: 'Olimpia',
			spouse: 'Silvestre Ubaldo',
			children: [
				{
					name: 'Aristeo',
					spouse: 'Leonarda Limjap',
					children: [
						{ name: 'Paz', spouse: 'Alfredo Filart' },
						{ name: 'Leonarda', spouse: 'Tomas Tirona' },
						{ name: 'Olimpia', spouse: 'Antonio Lozano' },
						{ name: 'Marita', spouse: 'Francisco Marasigan' },
					],
				},
				{ name: 'Cesario' },
			],
		},
		{
			name: 'Jose',
			spouse: 'Josephine Bracken',
		},
		{ name: 'Josefa' },
		{
			name: 'Soledad',
			spouse: 'Pantaleon Quintero',
			children: [
				{
					name: 'Trinitario',
					spouse: 'Maria San Mateo',
					children: [
						{ name: 'Jose Ma.' },
						{ name: 'Serafin', spouse: 'Violeta Saban' },
						{ name: 'Gloria', spouse: 'Juan Bohoyo' },
						{ name: 'Leticia', spouse: 'Moises Sacapaño' },
						{ name: 'Carmen' },
                        { name: 'Ramon',},
                        { name: 'Mario', spouse: 'Milagros Ibasco'},
						{ name: 'Maria', },
                        { name: 'Rafael', spouse: 'Concordia Pagulayan' },
					],
				},
				{
					name: 'Amelia',
					spouse: 'Bernabe Malvar',
					children: [
						{ name: 'Josefina', spouse: 'Oscar Guzman' },
						{ name: 'Antonio' },
						{ name: 'Jose', spouse: 'Agustina Arcega' },
						{ name: 'Lourdes' },
						{ name: 'Natividad'},
                        { name: 'Teresita'},
                        { name: 'Manuel'},
                        { name: 'Thomas'},
                        { name: 'Angelita', spouse: 'Porfirio Goco'},
                        { name: 'Francisco'},
					],
				},
				{
					name: 'Luisa',
					spouse: 'Jose Arguelles',
					children: [
						{ name: 'Jose', spouse: 'Priscilla Ylagan' },
						{ name: 'Concepcion', spouse: 'Jose Feria' },
						{ name: 'Tomas', spouse: 'Josefina Pineda',},
                        { name: 'Germiniano', spouse: 'Raquel Llanera' },
						{ name: 'Vicente', spouse: 'Baby de Leon' },
						{ name: 'Pilar', spouse: 'Ricardo Reyes' },
                        { name: 'Ma. Luisa', spouse: 'Reynaldo Tanjangco'},
                        { name: 'Elena', spouse: 'Norberto Villarama'}
					],
				},
				{ name: 'Serafin' },
				{ name: 'Felix' },
			],
		},
	],
}
