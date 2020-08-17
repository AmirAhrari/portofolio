import { useState, useEffect } from "react";
import axios from "axios";

export interface IRepo {
  name: string;
  demo?: string;
  description: string;
  repo: string;
  languages: string[];
  stars?: number;
  forks?: number;
}

export default function useRepos(repos: string[]) {
  const [data, setData] = useState<IRepo[]>([]);

  useEffect(() => {
    repos.forEach(async (repo) => {
      const repoRes = await axios.get("https://api.github.com/repos/" + repo);
      const langRes = await axios.get(repoRes.data.languages_url);

      setData((prev) => {
        return [
          ...prev,
          {
            name: repoRes.data.name,
            description: repoRes.data.description,
            repo: repoRes.data.html_url,
            stars: repoRes.data.stargazers_count,
            forks: repoRes.data.forks_count,
            languages: Object.keys(langRes.data),
          },
        ];
      });
    });
  }, [repos]);

  return data;
}
