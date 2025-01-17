import { Social } from "./Social";

export const Footer = () => {
  return (
    <footer className="bg-[#C58940] text-[#FAF8F1] py-6 text-center flex flex-col justify-center items-center gap-6 md:flex-row  md:justify-between md:px-28">
      <Social />
      <p className="text-lg">&copy; Ameer Talha, All Rights Reserved</p>
    </footer>
  );
};
