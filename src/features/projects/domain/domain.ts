// biome-ignore assist/source/useSortedKeys: needs to be sorted in this way for business needed
export const idsProjectList = {
	"tagliamento-river": ["Tagliamento river", "Golden Thoughts"],
	"como-lake": ["Como Lake", "The Wait"],
	"mulberry-trees": ["The Countryside", "Mulberry Trees"],
	"the-city": ["The City", "Marble Scraps"],
	carboys: ["The Cellar", "Jumping Carboys"],
	"poplar-grove": ["The Paper Mill", "Poplar Groove"],
	"palazzo-besta": ["Palazzo Besta", "Renaissance"],
} as const;

export const numberOfImages = {
	carboys: 3,
	"como-lake": 7,
	"mulberry-trees": 9,
	"palazzo-besta": 3,
	"poplar-grove": 6,
	"tagliamento-river": 7,
	"the-city": 4,
};

export type IdsProjectValues =
	(typeof idsProjectList)[keyof typeof idsProjectList];

export type IdsProjectKeys = keyof typeof idsProjectList;

/* <div>
	<p>Golden Thoughts</p>
	<p>Tagliamento River</p>
	<p>Udine (UD), Italy</p>
	<p>Ph. Riccardo Germinario</p>
</div> */
