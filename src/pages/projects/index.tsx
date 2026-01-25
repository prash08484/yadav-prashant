import { Helmet } from "react-helmet-async";
import ProjectsInfo from "./projects-info";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Prashant Yadav</title>
        <meta name="description" content="My Projects" />
      </Helmet>
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
        <ProjectsInfo />
      </section>
    </>
  );
}
