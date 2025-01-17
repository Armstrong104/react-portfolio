import { skills } from "../data";

export const SkillSection = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center relative inline-block after:content-[''] after:w-20 after:h-[3px] after:bg-[#C58940] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skills.map((category) => (
          <div
            key={category.category}
            className="shadow-md rounded-lg p-6 bg-gradient-to-r from-[#FAF8F1] to-[#FAEAB1] text-center transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#C58940]">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col max-w-15 items-center bg-white shadow-lg rounded-lg p-4 w-18 h-22 justify-between transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-12 object-contain"
                  />
                  <span className="text-[0.6rem] font-medium text-[#C58940]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


