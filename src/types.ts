export type Language = "tr" | "en";
export type ProgrammingLanguage =
  | "TypeScript"
  | "JavaScript"
  | "CSS"
  | "Pug"
  | "Solidity";

export interface GithubRepos {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string | null;
  language: ProgrammingLanguage;
}
