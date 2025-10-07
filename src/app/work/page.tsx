"use client";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutDavid from "../components/AboutDavid";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import ProjectModal, { ProjectDetails } from "../components/ProjectModal";
import { Project } from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  // Detailed project data for the modal
  const projectDetailsMap: { [key: string]: ProjectDetails } = {
    "1": {
      title: "Fiterview",
      subtitle: "Full-stack e-commerce solution with modern payment integration and admin dashboard",
      overview: [
        "This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project features a modern React frontend with a robust Node.js backend, integrated with Stripe for secure payments and PostgreSQL for data management.",
        "The platform handles thousands of daily transactions and provides real-time inventory updates across multiple warehouses.",
        "Built with scalability in mind, the system can handle peak loads during sales events and automatically scales based on demand."
      ],
      technicalImplementation: [
        "Implemented server-side rendering with Next.js for improved SEO and performance, resulting in 40% faster page loads.",
        "Developed a microservices architecture using Docker and Kubernetes for easy scaling and deployment.",
        "Created a custom caching layer with Redis to reduce database queries by 60% and improve response times."
      ],
      keyFeatures: [
        "User authentication and authorization system",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Stripe payment integration",
        "Admin dashboard for inventory management",
        "Order tracking and notifications",
        "Customer reviews and ratings",
        "Email notifications with SendGrid"
      ],
      demoVideoUrl: "https://example.com/demo",
      techStacks: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS", "Docker", "Kubernetes"],
      sourceCodeUrl: "https://github.com/example/fiterview",
      productionUrl: "https://fiterview.example.com"
    },
    "2": {
      title: "ONNS",
      subtitle: "Mobile-first task management app with real-time collaboration features",
      sampleGIFs: ["/webm/onns-demo-1.webm", "/webm/onns-demo-2.webm"],
      overview: [
        "This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project features a modern React frontend with a robust Node.js backend, integrated with Stripe for secure payments and PostgreSQL for data management.",
        "Real-time collaboration enables teams to work together seamlessly across different time zones.",
        "The mobile-first approach ensures a consistent experience across all devices."
      ],
      technicalImplementation: [
        "Implemented WebSocket connections for real-time updates and notifications across all connected clients.",
        "Built with React Native for cross-platform mobile support on iOS and Android.",
        "Integrated Supabase for real-time database subscriptions and authentication."
      ],
      keyFeatures: [
        "User authentication and authorization system",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Admin dashboard for inventory management",
        "Real-time collaboration features",
        "Push notifications",
        "Offline mode support",
        "Team workspace management"
      ],
      demoVideoUrl: "https://example.com/demo",
      techStacks: ["React", "Next.js", "Supabase", "Axios", "TailwindCSS", "Zustand", "OAuth", "REST API", "TypeScript"],
      sourceCodeUrl: "https://github.com/example/onns",
      productionUrl: "https://onns.example.com"
    },
    "3": {
      title: "FC Back Office",
      subtitle: "Comprehensive admin dashboard for managing business operations and analytics",
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
      demoVideoUrl: "https://example.com/demo",
      techStacks: ["React", "Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "Chart.js", "REST API", "JWT"],
      sourceCodeUrl: "https://github.com/example/fc-backoffice",
      productionUrl: "https://backoffice.example.com"
    }
  };

  const handleProjectClick = (projectId: string) => {
    const details = projectDetailsMap[projectId];
    if (details) {
      setSelectedProject(details);
      setIsModalOpen(true);
    }
  };

  const projectsData: Project[] = [
    {
      id: "1",
      title: "Fiterview",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      onClick: () => handleProjectClick("1"),
    },
    {
      id: "2",
      title: "ONNS",
      description: "Mobile-first task management app with real-time collaboration features",
      onClick: () => handleProjectClick("2"),
    },
    {
      id: "3",
      title: "FC Back Office",
      description: "Comprehensive admin dashboard for managing business operations",
      onClick: () => handleProjectClick("3"),
    },
  ];

  return (
    <>
      <Header />
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
    </>
  );
}

