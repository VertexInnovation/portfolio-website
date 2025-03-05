import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/ComingSoon";

function Resources() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center h-screen text-white">
        <ComingSoon pageName="Resources" />
      </div>
    </div>
  );
}

export default Resources;
