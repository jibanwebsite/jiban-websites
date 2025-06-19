import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Web App",
    year: "20+ Web App Completed",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Frontend E-Commerce Sites",
    year: "25+ Projects (E-Commerce)",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Portfolio Website",
    year: "50+ Website Completed",
    align: "right",
    image: "../../public/images/portfolioJ.png",
    link: "#",
  },
  {
    name: "PC SetUp",
    year: "Jan2023",
    align: "left",
    image: "../../public/images/pcset.png",
    link: "#",
  },
  {
    name: "Programmer",
    year: "Jul2023-Work as a Programmer",
    align: "right",
    image: "../../public/images/devpp.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
