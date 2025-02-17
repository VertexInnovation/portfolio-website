// Community
import HeroSection from "../components/CommunityComponents/HeroSection";
import FeatureCards from "../components/CommunityComponents/FeatureCards";
// import VideoShowcase from "../components/CommunityComponents/VideoShowcase";
//import EventCarousel from "../components/CommunityComponents/EventCarousel";
// import TestimonialCarousel from "../components/CommunityComponents/TestimonialCarousel";
import TeamGrid from "../components/CommunityComponents/TeamGrid";
import Saying from "../components/CommunityComponents/Saying";
const Community = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <HeroSection />
      <FeatureCards />
      {/* <VideoShowcase /> */}
      {/* <EventCarousel /> */}
      <Saying />
      {/* <TestimonialCarousel /> */}
      <TeamGrid />
    </div>
  );
};

export default Community;
