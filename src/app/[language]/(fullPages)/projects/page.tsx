import { Card, Heading } from "@/components/UI";
import getGithubRepos from "@/lib/getGithubRepos";
import styles from "./page.module.css";
import getNpmPackages from "@/lib/getNpmPackages";
import { getDictionary } from "@/lib/getDictionary";
import { Language } from "@/types";
import { Metadata } from "next";

const Page = async ({
  params: { language },
}: {
  params: { language: Language };
}) => {
  const reposPromise = getGithubRepos();
  const npmPackagesPromise = getNpmPackages();
  const { githubRepos: githubReposDict, npmPackages: npmPackagesDict } =
    getDictionary(language);

  const [repos, npmPackages] = await Promise.all([
    reposPromise,
    npmPackagesPromise,
  ]);

  return (
    <div className={styles.projects}>
      <Heading>{githubReposDict}</Heading>
      <div className={styles.projects__lists}>
        {repos.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            language={repo.language}
            src="/github-logo.png"
            link={repo.html_url}
            homepage={repo.homepage}
          />
        ))}
      </div>
      <Heading>{npmPackagesDict}</Heading>
      <div className={styles.projects__lists}>
        <Card
          title={npmPackages.name}
          description={npmPackages.description}
          language={"TypeScript"}
          src="/npm-logo.webp"
          link={"https://www.npmjs.com/package/express-ease"}
        />
      </div>
    </div>
  );
};

export default Page;
