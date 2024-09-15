import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Durb",
    description:
      "Durb durb durb",
    tags: ["Web", "Competitive", "Strategy", "Risk", "Clash Royale"],
    // imageUrl: corpcommentImg,
  },
  {
    title: "Ghosts Don't Sleep",
    description:
      "Ghosts dont sleep",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    // imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    // imageUrl: wordanalyticsImg,
  },
] as const;