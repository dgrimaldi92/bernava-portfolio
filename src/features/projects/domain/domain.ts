// biome-ignore assist/source/useSortedKeys: needs to be sorted in this way for business needed
export const idsProjectList = {
	"Tagliamento river": "tagliamento-river",
	"Mulberry Trees": "mulberry-trees",
	"Jumping Carboys": "carboys",
	"The City": "the-city",
	"Poplar Groove": "poplar-grove",
	"Palazzo Besta": "palazzo-besta",
} as const;

export const numberOfImages = {
	carboys: 3,
	"mulberry-trees": 9,
	"palazzo-besta": 0,
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
