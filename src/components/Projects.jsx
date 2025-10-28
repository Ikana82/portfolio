import ProjectCard from "./ProjectCard";

// Data dummy untuk proyek
const projectData = [
  {
    title: "Project E-commerce",
    description:
      "Sebuah platform e-commerce modern dengan fitur keranjang belanja dan pembayaran.",
    imageUrl: "https://via.placeholder.com/400x250", // Ganti dengan URL gambar proyekmu
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description:
      "Aplikasi untuk mengatur tugas harian dengan antarmuka drag-and-drop.",
    imageUrl: "https://via.placeholder.com/400x250", // Ganti dengan URL gambar proyekmu
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Proyek Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
