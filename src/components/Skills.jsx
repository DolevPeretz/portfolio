import { frontend, backend, databasesTools } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="py-20 align-element " id="skills">
      <SectionTitle text="Frontend" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {frontend.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
      <SectionTitle text="Backend" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {backend.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
      <SectionTitle text="DataBase & Tools" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {databasesTools.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
