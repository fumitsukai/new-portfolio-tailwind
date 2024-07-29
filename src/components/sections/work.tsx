import Project from "./project";
import data from "./../../data/project.json";

export default function Work() {
  const renderedProject = data.map((projects) => (
    <Project {...projects} key={projects.id} />
  ));
  return (
    <>
      <div className="bg-linenDark dark:bg-[#1f1b1c]  pt-10 pb-20">
        <h2 className="text-center font-bold mb-1">WORK</h2>
        <h3 className="text-center mb-10 font-light text-sm  mx-4 ">
          A SHOWCASE OF PROJECTS
        </h3>
        <section className="md:container md:grid md:grid-cols-2">
          {renderedProject}
        </section>
      </div>
    </>
  );
}
