import { GithubRepos } from "@/types";

const { DOMAIN } = process.env;
const getGithubRepos = async (): Promise<GithubRepos[]> => {
  const data = await fetch(DOMAIN! + "/api/github");
  const json = await data.json();
  return json.data;
};

export default getGithubRepos;
