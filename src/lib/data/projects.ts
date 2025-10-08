export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Rentease - Home Rental",
    description: "",
    longDescription: "",
    image: "Rentease.png",
    technologies: ["Next.js", "TypeScript", "MySql", "Prisma", "Tailwind CSS"],
    liveUrl: "https://rent-ease-next.vercel.app/",
    githubUrl: "https://github.com/Sushan999/RentEase-next",
    featured: true,
  },
  {
    id: "ShopHub",
    title: "ShopHub - Online Shopping Website",
    description: "",
    longDescription: " ",
    image: "Shophub.png",
    technologies: ["Next.js", "Typescript", "Tailwind"],
    liveUrl: "https://next-ecommerce-shophub.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Next-ecommerce",
    featured: true,
  },
  {
    id: "CarRental",
    title: "Car-Rental - Rent Luxurious Cars",
    description: "",
    longDescription: "",
    image: "Carrental.png",
    technologies: ["React.js", "Express.js", "Mongodb", "Tailwind"],
    liveUrl: "https://car-rental-kohl-kappa.vercel.app/",
    githubUrl: "https://github.com/Sushan999/CarRental",
    featured: true,
  },
  {
    id: "Estate",
    title: "Estate",
    description: "",
    longDescription:
      "A robust RESTful API built for a social media platform. Implements JWT-based authentication, user profiles, post creation and management, commenting system, likes, follows, and real-time notifications. The API is fully documented using Swagger/OpenAPI, making it easy for frontend .",
    image: "Estate.png",
    technologies: ["React.js", "Tailwind"],
    liveUrl: "https://estate-alpha.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Estate",
    featured: true,
  },
  {
    id: "Myntra",
    title: "Myntra",
    description: "",
    longDescription: "",
    image: "Myntra.png",
    technologies: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://myntra-clone-zeta-seven.vercel.app/",
    githubUrl: "https://github.com/Sushan999/Myntra_clone",
    featured: true,
  },

  {
    id: "ValleyRestro",
    title: "ValleyRestro - Restaurant",
    description: "",
    longDescription: "",
    image: "Valleyrestro.png",
    technologies: ["React", "tailwind", "CSS", "Javascript"],
    liveUrl: "https://valley-restro.vercel.app/",
    githubUrl: "https://github.com/Sushan999/ValleyRestro",
    featured: true,
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}
