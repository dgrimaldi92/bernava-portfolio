import { idsProjectList } from "~/features/projects/domain/domain";

export const idsList = {
	about: [],
	contacts: [],
	index: ["cover", "about", "information", "projects", "contacts"],
	projects: Object.entries(idsProjectList),
} as const;
