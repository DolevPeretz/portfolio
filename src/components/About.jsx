import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-1 items-center gap-16">
        <article>
          <SectionTitle text="One-Dicomano | Developer & Implementer " />
          <p className="text-slate-600 mt-8 leading-loose">
            Design and creation of databases, including developing
            Entity-Relationship Diagrams (ERD), adding customizations, and
            implementing existing processes. System integrations involving REST
            APIs, databases, and process optimization. Development of
            user-friendly components and interfaces using JavaScript, HTML, CSS,
            and the Now Experience framework. Performed testing and quality
            assurance to ensure high standards of functionality. Part-time
            implementer in Enterprise Software Solutions at Rafael Advanced
            Defense Systems.
          </p>
        </article>

        <article>
          <SectionTitle text="Cambium | Full stack developer Intern" />
          <p className="text-slate-600 mt-8 leading-loose">
            Built and deployed a feedback system that sent personalized emails
            to users and collected responses in MongoDB for analysis and
            insights. Contributed across the stack using React, TypeScript,
            Node.js, Redux, Docker, and AWS.
          </p>
        </article>

        <article>
          <SectionTitle text="Sami Shamoon | Research Assistant " />
          <p className="text-slate-600 mt-8 leading-loose">
            Built a machine learning model to predict author gender from text
            data, including data collection, preprocessing, and model training.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
