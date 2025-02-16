import React from "react";
import Navbar from "../components/Navbar";
import FormfacadeEmbed from "@formfacade/embed-react";

const Submissions: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-start pt-24">
        <div className="w-full max-w-4xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="h-[1600px] overflow-visible"> {/* Increased height further */}
<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/104620579275872182893/form/1FAIpQLSd-2x4XWXER11FhkVideXto8cfsgeChBrhvkIRh3GvCBJeV3w/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
