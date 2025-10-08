"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import AboutDavid from "../components/AboutDavid";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import ProjectModal, { ProjectDetails } from "../components/ProjectModal";
import { Project } from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  // Detailed project data for the modal
  const projectDetailsMap: { [key: string]: ProjectDetails } = {
    "1": {
      title: "Fiterview",
      subtitle: "AI-powered mock interview platform with resume analysis and real-time feedback system",
      sampleGIFs: ["/webm/fiterview-demo-1.webm", "/webm/fiterview-demo-2.webm"],
      overview: [
        "This AI-powered interview preparation platform was built to help candidates practice interviews with personalized, job-specific questions. The project features a modern Next.js frontend with clean architecture backend, integrated with LLM APIs for intelligent question generation and PostgreSQL for data persistence.",
        "The platform generates tailored interview questions based on uploaded resumes and target job descriptions, providing realistic practice sessions with both behavioral and technical coverage.",
        "Built with a layered architecture following clean architecture principles, separating domain logic from adapters to ensure maintainability and scalability across different AI providers and services."
      ],
      technicalImplementation: [
        "Implemented Next.js App Router with server actions for optimized data fetching and improved performance, separating UI concerns from business logic.",
        "Developed a clean architecture pattern with domain-driven design, organizing code into application, domain, and infrastructure layers for maintainable and testable code.",
        "Created pluggable adapter system for LLM, STT/TTS, and email services, allowing seamless provider switching without affecting core business logic."
      ],
      keyFeatures: [
        "Resume and job description upload system",
        "AI-powered question generation tailored to JD",
        "Live mock interviews with voice or text input",
        "Speech-to-text and text-to-speech integration",
        "Rubric-based scoring and feedback system",
        "Session history and progress tracking",
        "NextAuth.js authentication with OAuth providers",
        "Privacy-first design with account-scoped data"
      ],
      demoVideoUrl: "https://fiterview.com",
      techStacks: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "NextAuth.js", "OpenAI"],
      sourceCodeUrl: "https://github.com/jaino-song/Fiterview",
      productionUrl: "https://fiterview.com",
      completed: true,
    },
    "2": {
      title: "ONNS",
      subtitle: "Weather-driven outfit community platform with real-time social sharing features",
      sampleGIFs: ["/webm/onns-demo-1.webm", "/webm/onns-demo-2.webm"],
      demoVideoUrl: "https://onns.vercel.app",
      overview: [
        "This weather-driven outfit platform was built to help users decide what to wear by combining real-time weather data with social sharing. The project features a modern Next.js frontend with clean architecture backend, integrated with Supabase for real-time updates and database management.",
        "Real-time feeds enable users to share outfit choices and see what others are wearing based on current feels-like temperature and seasonal conditions.",
        "The mobile-first responsive design ensures a consistent experience across all devices, making outfit selection simple and social."
      ],
      technicalImplementation: [
        "Implemented Supabase Realtime subscriptions for instant updates of new posts and comments across all connected clients.",
        "Built with Next.js App Router and server actions for optimized data fetching and improved SEO performance.",
        "Integrated clean architecture pattern separating domain logic from infrastructure adapters for maintainable and testable code."
      ],
      keyFeatures: [
        "Real-time weather and feels-like temperature display",
        "Outfit post creation with photo uploads",
        "Weather and season-based filtering system",
        "Social authentication with OAuth providers",
        "Real-time feed updates via Supabase Realtime",
        "Comments and reactions on outfit posts",
        "Responsive design optimized for all devices",
        "Community-driven outfit recommendations"
      ],
      techStacks: ["React", "Next.js", "Supabase", "TailwindCSS", "Zustand", "TypeScript", "PostgreSQL"],
      sourceCodeUrl: "https://github.com/jaino-song/ONNS",
      productionUrl: "https://onns.vercel.app",
      completed: true,
    },
    "3": {
      title: "FC Back Office",
      subtitle: "Comprehensive admin dashboard for managing business operations and analytics",
      sampleGIFs: ["/webm/fc-backoffice-demo-1.webm", "/webm/fc-backoffice-demo-2.webm"],
      demoVideoUrl: "https://fc-backoffice.vercel.app",
      overview: [
        "This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project features a modern React frontend with a robust Node.js backend, integrated with Stripe for secure payments and PostgreSQL for data management.",
        "The back office system provides comprehensive analytics and reporting tools for business intelligence.",
        "Role-based access control ensures secure management of sensitive business data."
      ],
      technicalImplementation: [
        "Developed custom data visualization components using D3.js for interactive charts and graphs.",
        "Implemented role-based access control (RBAC) with fine-grained permissions.",
        "Created automated report generation system with scheduled email delivery."
      ],
      keyFeatures: [
        "User authentication and authorization system",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management",
        "Advanced analytics dashboard",
        "User role management",
        "Automated reporting",
        "Data export functionality"
      ],
      techStacks: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Supabase", "REST API", "JWT"],
      sourceCodeUrl: "https://github.com/jaino-song/FC-BackOffice",
      productionUrl: "https://fc-backoffice.vercel.app",
      completed: false,
    }
  };

  const handleProjectClick = (projectId: string) => {
    const details = projectDetailsMap[projectId];
    if (details && details.completed) {
      setSelectedProject(details);
      setIsModalOpen(true);
    }
    else {
      toast.warning("Project Under Work");
    }
  };

  const projectsData: Project[] = [
    {
      id: "1",
      image: "/png/Fiterview.png",
      title: "Fiterview",
      description: "AI-powered mock interview platform with resume analysis and real-time feedback system",
      onClick: () => handleProjectClick("1"),
    },
    {
      id: "2",
      image: "/png/ONNS.png",
      title: "ONNS",
      description: "Weather-driven outfit community platform with real-time social sharing features",
      onClick: () => handleProjectClick("2"),
    },
    {
      id: "3",
      image: "/png/FC-BackOffice.png",
      title: "FC Back Office",
      description: "Comprehensive admin dashboard for managing business operations and analytics",
      onClick: () => handleProjectClick("3"),
    },
  ];

  return (
    <>
      <Hero />
      <AboutDavid />
      <Projects projects={projectsData} />

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ProjectModal project={selectedProject} onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <Contact />
      <Footer />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

