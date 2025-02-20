import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/ComingSoon";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <ComingSoon pageName="Courses" />
      </div>
    </div>
  );
}

export default Courses;
