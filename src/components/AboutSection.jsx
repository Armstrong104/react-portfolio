import Proptypes from 'prop-types';

export const AboutSection = ({aboutSectionRef}) => {
  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="transition-[margin-top] duration-500 ease-in-out"
    >
      <h2 className="text-3xl font-bold mb-4 relative inline-block after:content-[''] after:w-20 after:h-[3px] after:bg-[#C58940] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
        About Me
      </h2>
      <p className="text-[#E5BA73] text-lg leading-relaxed max-w-2xl mx-auto">
        I&apos;m a software developer with expertise in the LAMP stack,
        including MySql, Laravel, Apache, and PHP. Skilled in designing and
        developing scalable, full-stack web applications, managing databases,
        building server-side APIs, and creating dynamic, interactive front-end
        experiences.
      </p>
    </section>
  );
};

AboutSection.propTypes = {
  aboutSectionRef: Proptypes.object.isRequired,
};
