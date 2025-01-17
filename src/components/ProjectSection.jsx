import { projects } from "../data";

export const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4 relative inline-block after:content-[''] after:w-20 after:h-[3px] after:bg-[#C58940] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#FAF8F1] text-[#C58940] border-2 border-[#E5BA73] rounded-[12px] shadow-md overflow-hidden transition-all duration-300 ease-in-out px-6 py-3 text-center hover:-translate-y-2 hover:shadow-lg hover:border-[#FAEAB1]"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-[#E5BA73] mb-4 min-h-[100px]">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block bg-[#C58940] text-[#FAF8F1] px-4 py-2 rounded hover:bg-[#FAEAB1] hover:text-[#C58940] transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
