import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormfacadeEmbed from "@formfacade/embed-react";

const STORAGE_KEY = "vertex_auth";

const Submissions: React.FC = () => {
  const navigate = useNavigate();

  // Double-check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        navigate("/signup");
        return;
      }
      
      try {
        const auth = JSON.parse(stored);
        if (!auth.isLogged || (auth.expiresAt && auth.expiresAt < Date.now())) {
          navigate("/signup");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        navigate("/signup");
      }
    };
    
    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar />
      <div className="flex flex-col items-center justify-start pt-24">
        <div className="w-full max-w-4xl p-6 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center">
            SPECTRUM'25 Project Submission Portal
          </h1>
          <div className="h-[1600px] overflow-visible">
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
