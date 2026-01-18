export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  content?: string;
}

export type ProjectStatus = "Active" | "Pending" | "Archived";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  updated: string;
  url: string;
}
