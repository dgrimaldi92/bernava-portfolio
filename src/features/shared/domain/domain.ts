import { idsProjectList } from "~/features/projects/domain/domain";

export const idsList = {
	about: [],
	contacts: [],
	index: ["cover", "about", "information", "projects", "contacts"],
	menu: ["about", "projects", "contacts"],
	projects: idsProjectList,
} as const;
