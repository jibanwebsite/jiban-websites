import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hello folks..! It's me Jiban Budhathoki. I'm from Nepal. 
        Thankyou for visiting my website. Actually,I am handling all IT 
        related work of Facebook Meta Group Company and website development, 
        app development and all releted work of IT. In this website you can get 
        free hacking cousre of python also.. I specialize in React and front-end 
        development, helping
        students build real-world projects and master modern web technologies. I
        also run a YouTube channel, CodeNest, where I create tutorials and
        courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
