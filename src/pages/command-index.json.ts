import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL;

  // Load published research
  const research = await getCollection("research");

  const publishedResearch = research.filter(
    (article) => !article.data.draft
  );

  // Load published projects
  const projects = await getCollection("projects");

  const publishedProjects = projects.filter(
    (project) => !project.data.draft
  );

  // Build the command index
  const commands = [
    {
      id: "home",
      title: "Homepage",
      description: "Return to Trace & Triage",
      category: "Navigation",
      url: base
    },
    {
      id: "research",
      title: "Research Archive",
      description: "Browse published investigations",
      category: "Navigation",
      url: `${base}research/`
    },
    {
      id: "projects",
      title: "Research Projects",
      description: "Browse research laboratories",
      category: "Navigation",
      url: `${base}projects/`
    },
    {
      id: "methodology",
      title: "Research Methodology",
      description: "Research methods and evidence standards",
      category: "Navigation",
      url: `${base}methodology/`
    },

    ...publishedResearch.map((article) => ({
      id: `research-${article.id}`,
      title: article.data.title,
      description: article.data.description,
      category: "Research",
      reference: article.data.caseId,
      url: `${base}research/${article.id}/`
    })),

    ...publishedProjects.map((project) => ({
      id: `project-${project.id}`,
      title: project.data.title,
      description: project.data.description,
      category: "Project",
      reference: project.data.projectId,
      url: `${base}projects/${project.id}/`
    }))
  ];

  return new Response(
    JSON.stringify(commands),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
};