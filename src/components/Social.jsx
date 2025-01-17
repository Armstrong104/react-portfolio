import { socials } from '../data';

export const Social = () => {
  return (
    <section id="social">
      <ul className="flex justify-center gap-6">
        {socials.map((social) => (
          <li key={social.name} className="relative group">
            <a href={social.url} className="flex flex-col items-center" target='_blank'>
              <img
                className="transition-transform duration-300 hover:scale-150 h-8 w-8 object-contain"
                src={social.image}
                alt={social.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
