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
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Dispatch",
    hash: "#dispatch",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const portfolioData = [
  {
    title: "Durb",
    description:
      "This real-time strategy game, inspired by Risk, features a randomly generated map. Players compete for territory using energy, which grows in nodes and transfers along edges. Strategic abilities and unique mechanics, like structures and dynamic edges, add depth.",
    tags: ["Web", "Competitive", "Strategy", "Risk", "Clash Royale"],
    imageUrl: "/durb.png",
  },
  {
    title: "Ghosts Don't Sleep",
    description:
      "Ghosts Don't Sleep is a multiplayer game where hunters fight an invisible ghost. The ghost grabs hunters, and hunters use flashlights to defeat the ghost and revive teammates. Unique abilities and resource management add depth to the gameplay.",
    tags: ["Stealth", "Team Strategy", "Fun and Challenging", "Online"],
    imageUrl: "/ghostsdontsleep.png",
  },
  {
    title: "Track Zero",
    description:
      "Track Zero is a thrilling 2D web racing game with challenging tracks, intuitive controls, and vibrant graphics. Race against time, collect power-ups, and unlock new levels as you master precision and speed. Are you ready to reach Track Zero?",
    tags: ["Web", "Racing", "Arcade", "Online", "Precision Gaming", "Fun and Addictive"],
    imageUrl: "/trackzero.png",
  },
] as const;