import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useState } from "react";

const ProjectsCard = ({ url, img, github, title, text }) => {
  const [showFull, setShowFull] = useState(false);
  const limit = 220;

  const displayText = showFull ? text : text.slice(0, limit);

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">
          {displayText}
          {!showFull && text.length > limit && (
            <span
              onClick={() => setShowFull(true)}
              className="text-blue-600 cursor-pointer ml-1 underline"
            >
              ...read more
            </span>
          )}
        </p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
