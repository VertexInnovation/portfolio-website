import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/ComingSoon";

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center h-screen text-white">
        <ComingSoon pageName="Projects" />
      </div>
    </div>
  );
}

export default Projects;
