export const idsProjectList = [
	"1-tagliamento-river", //: ["Tagliamento river", "Golden Thoughts"],
	"2-como-lake", //: ["Como Lake", "The Wait"],
	"3-mulberry-trees", //: ["The Countryside", "Mulberry Trees"],
	"4-the-city", //: ["The City", "Marble Scraps"],
	"5-carboys", //: ["The Cellar", "Jumping Carboys"],
	// "poplar-grove": ["The Paper Mill", "Poplar Groove"],
	// "palazzo-besta": ["Palazzo Besta", "Renaissance"],
] as const;

export const numberOfImages = {
	"1-tagliamento-river": 5,
	"2-como-lake": 8,
	"3-mulberry-trees": 8,
	"4-the-city": 4,
	"5-carboys": 3,
	"palazzo-besta": 3,
	"poplar-grove": 6,
};

export type IdsProjectKeys = (typeof idsProjectList)[number];

/* <div>
	<p>Golden Thoughts</p>
	<p>Tagliamento River</p>
	<p>Udine (UD), Italy</p>
	<p>Ph. Riccardo Germinario</p>
</div> */
