import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/ComingSoon";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <ComingSoon pageName="Projects" />
      </div>
    </div>
  );
}

export default Projects;
