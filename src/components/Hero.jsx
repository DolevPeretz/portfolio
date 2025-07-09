import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import selfimg from "../assets/self.png";
import { FaPhoneSquare, FaMailBulk } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-pink-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Dolev</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Softwer Engineering- Cum Laude
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            specialization in Data Science.
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Sami Shamoon College of Engineering.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/DolevPeretz">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/dolev-peretz/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="tel:0509005190">
              <FaPhoneSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="mailto:dolevop@gmail.com">
              <IoMdMail className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={selfimg} className="h-80 lg:h-96 rounded-2xl" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
