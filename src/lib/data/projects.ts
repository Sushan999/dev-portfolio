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
    longDescription:
      "This comprehensive e-commerce solution handles everything from product catalog management to order fulfillment. Features include real-time inventory tracking, secure payment processing via Stripe, .",
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
    longDescription:
      "A modern task management solution designed for teams. Features include drag-and-drop kanban boards, real-time collaboration using Socket.io, multiple workspace support, task assignments, due dates, ",
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
    longDescription:
      "A powerful analytics platform that provides real-time insights into user behavior and application performance. Built with D3.js and Chart.js for rich data visualizations, the dashboard offers .",
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
    longDescription:
      "A robust RESTful API built for a social media platform. Implements JWT-based authentication, user profiles, post creation and management, commenting system, likes, follows, and real-time notifications. The API is fully documented using Swagger/OpenAPI, making it easy for frontend .",
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
    longDescription:
      "A robust RESTful API built for a social media platform. Implements JWT-based authentication, user profiles, post creation and management, commenting system, likes, follows, and real-time notifications. The API is fully documented using Swagger/OpenAPI, making it easy for frontend .",
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
