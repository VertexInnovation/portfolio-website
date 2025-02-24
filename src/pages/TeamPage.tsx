import { useState } from 'react';
import { Linkedin, Instagram, Mail, X } from 'lucide-react';
import vishnu from '../assets/team/Vishnu.jpg';
import giri from '../assets/team/giridharan.jpg';
import Swayam from '../assets/team/Swayam.jpg';
import Aashik from '../assets/team/MohammedAashik.jpeg';
import alwin from '../assets/team/alwin.jpg';
import karunya from '../assets/team/studentHeads/karunya.jpeg';
import harini from '../assets/team/studentHeads/Harini.jpeg';
import Smitha from '../assets/team/studentHeads/SmithaGladius.jpg';
import sanchali from '../assets/team/studentHeads/sanchali.jpg';
import Andrew from '../assets/team/studentHeads/Andrew.png';
import sakthi from '../assets/team/studentHeads/Sakthi.jpg';
import rahul from '../assets/team/studentHeads/Rahul.jpg';
import vishnupandian from '../assets/team/studentHeads/Vishnupaandian.jpg';
import abhinavanagarajan from '../assets/team/studentHeads/Abhinavanagarajan.jpg';
import ananya from '../assets/team/ananya.jpeg';
// import viswa from '../assets/team/studentHeads/viswa.jpeg';
const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const teamMembers = [
    {
      name: 'Vishnu Swaroop G',
      designation: 'Founder',
      image: vishnu,
      bio: 'As the visionary founder of Vertex Tech, Vishnu leads our company with innovative strategies and a passion for technological advancement. His leadership drives our mission to deliver cutting-edge solutions.',
      linkedin: 'https://www.linkedin.com/in/vishnu-swaroop-g-820b8928b',
      instagram: 'https://www.instagram.com/vishnu.gvs',
      email: 'director@vertextech.org'
    },
    {
      name: 'Giridharan R E',
      designation: 'Co-Founder',
      image: giri,
      bio: 'Giridharan brings strong leadership expertise to Vertex Tech, overseeing our operations and ensuring excellence in project delivery. His strategic vision helps drive our company forward.',
      linkedin: 'https://www.linkedin.com/in/giridharan-r-e',
      instagram: 'https://www.instagram.com/giridharan_re',
      email: 'executive@vertextech.org'
    },
    {
      name: 'Mohammed Aashik F',
      designation: 'Cheif Technical Officer',
      image: Aashik,
      bio: 'Aashik leads our technical initiatives with expertise in modern web technologies. His innovative approach and technical knowledge drive our development projects to success.',
      linkedin: 'https://www.linkedin.com/in/mohammed-aashik-f-690418263/',
      instagram: 'https://www.instagram.com/_ashik_1701_/',
      email: 'technical@vertextech.org'
    },
    {
      name: 'Smitha Gladius',
      designation: 'Cheif Organizing Officer',
      image: Smitha,
      bio: 'Smitha excels in project management and team coordination. Her leadership ensures smooth operations and successful delivery of our client projects.',
      linkedin: 'https://www.linkedin.com/in/t-s-smitha-gladius-6824b4251/?originalSubdomain=in',
      instagram: 'https://www.instagram.com/smitha_gladys',
      email: 'management@vertextech.org'
    },
    {
      name: 'Swayam Krishnan',
      designation: 'Chief Marketing Officer',
      image: Swayam,
      bio: 'As the Chief Financial Officer, Swayam manages our financial strategies and operations. His expertise in financial planning ensures sustainable growth and sound fiscal management.',
      linkedin: 'https://www.linkedin.com/in/swayamkrishnan',
      instagram: 'https://www.instagram.com/swayam_krishnan0905',
      email: 'finance@vertextech.org'
    },
    {
      name: 'Alwin Nithish R',
      designation: 'Cheif Vision Officer',
      image: alwin,
      bio: 'Alwin brings innovative vision and strategic thinking to Vertex Tech. His creative approach helps shape our future direction and technological initiatives.',
      linkedin: 'https://www.linkedin.com/in/alwin-nithish-r-a78046252',
      instagram: 'https://www.instagram.com/ransyverse',
      email: 'alwinnithishr@gmail.com'
    },
    {
      name: 'Abhinavanagarajan A',
      designation: 'Chief Financial Officer',
      image: abhinavanagarajan,
      bio: 'As the Chief Financial Officer, Abhinav manages our financial strategies and operations. His expertise in financial planning ensures sustainable growth and sound fiscal management.',
      linkedin: 'https://www.linkedin.com/in/abhinavanagarajan-a-47798128a',
      instagram: 'https://www.instagram.com/abhinavanagarajan',
      email: 'abhinavanagarajan@gmail.com'
    },
    {
      name: 'Sanchali',
      designation: 'Social media lead',
      image: sanchali,
      bio: 'Sanchali is a creative and innovative social media lead who brings fresh ideas and strategies to our team. Her expertise in digital marketing helps drive our online presence.',
      linkedin: 'https://www.linkedin.com/in/sanchali-shastri-661b5334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sanc',
      email: 'sanchalishastri13@gmail.com'
    },
    {
      name: 'Rahul K',
      designation: 'Creative Designer',
      image: rahul,
      bio: 'I am Rahul, a creative designer with a passion for visual storytelling and innovation. I thrive on bringing ideas to life through design, blending creativity with functionality to craft impactful visuals. With a keen eye for detail and a collaborative mindset, I enjoy working across different teams to create designs that inspire and engage.',
      linkedin: 'https://www.linkedin.com/in/rahul-k-7982a8293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/kutty_rahul_07?igsh=OG9idjB2Y2hpcmdx',
      email: 'rahul211307@gmail.com'
    },
    {
      name: 'Ananya B',
      designation: 'HR Lead',
      image: ananya,
      bio: 'Ananya is a dedicated HR lead who fosters collaboration and enhances employee engagement. Her enthusiasm and leadership create a positive impact on the team.',
      linkedin: 'https://www.linkedin.com/in/ananya-baalasubramani-197ba2282',
      instagram: 'https://www.instagram.com/Ananyaahh',
      email: 'ananya.baalas@gmail.com',
    },
    {
      name: 'Vishnu Paandian',
      designation: 'R&D Lead',
      image: vishnupandian, 
      bio: 'I am Vishnu, the R&D Lead and a passionate engineer who thrives on innovation and collaboration. I enjoy exploring new technologies and driving impactful projects that bridge the gap between academia and industry. With a keen interest in research and development, I am committed to creating solutions that make a difference.',
      linkedin: 'https://www.linkedin.com/in/vishnu-pandian-8b9a5924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/vishnu_pandian_?igshid=1f3j9x3z1j1x5',
      email: 'vishnupaandian@gmail.com'
    },
    {
      name: 'LN Karunyaa',
      designation: 'Student Coordinator',
      image: karunya,
      bio: 'LN Karunyaa is a dedicated student coordinator who fosters collaboration and enhances student engagement. Their enthusiasm and leadership create a positive impact on the community.',
      linkedin: 'https://www.linkedin.com/in/karunyaa-ln-b5786a28b',
      instagram: 'https://www.instagram.com/karunyaaln',
      email: 'lnkarunyaa@gmail.com'
    },
    {
      name: 'Harini Karthikeyan',
      designation: 'Student Coordinator',
      image: harini,
      bio: 'Harini is a dedicated student coordinator who brings energy and fresh perspectives to our team. Her commitment to excellence helps foster collaboration and growth.',
      linkedin: 'https://www.linkedin.com/in/harini-karthikeyan-841b8928b/',
      instagram: 'https://www.instagram.com/vertex_innovate/',
      email: 'harinikk.863@gmail.com'
    },
    {
      name: 'Shakthi R',
      designation: 'Student Director',
      image: sakthi,
      bio: 'I am Shakthi, the Student Director and a passionate learner who thrives on leadership and collaboration. I enjoy connecting with people across different sectors, bringing fresh ideas, and contributing to impactful projects that bridge the gap between academia and industry.',
      linkedin: 'https://www.linkedin.com/in/shakthi-r-94847a2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/19_shakthi?igsh=MzRwejh6ZHFta2t2',
      email: 'shakthirm05@gmail.com'
    },
    {
      name: 'Andrew Sundaradhas',
      designation: 'Student Director', 
      image: Andrew,
      bio: 'I am Andrew Sundaradhas, the Student Director and an enthusiastic engineer who enjoys engaging with people and building connections across sectors. Passionate about innovation and collaboration, I thrive in dynamic environments, fostering partnerships and driving impactful projects.',
      linkedin: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B9Tyvuv52RMmkNr%2BjGU0iZQ%3D%3D',
      instagram: 'https://www.instagram.com/mj_thriller?igsh=MWxyeWsyaXFtbHoweg==',
      email: 'Andrewsundaradhas56@gmail.com'
    }
  ];
  
  const MemberModal = ({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute p-2 text-gray-400 transition-colors rounded-full top-4 right-4 hover:text-white hover:bg-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img 
              src={member.image} 
              alt={member.name}
              className="object-cover w-full h-64 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
          
          <div className="p-6 md:w-1/2">
            <h3 className="mb-1 text-2xl font-bold text-white">{member.name}</h3>
            <p className="mb-4 text-blue-400">{member.designation}</p>
            <p className="mb-6 text-gray-300">{member.bio}</p>
            
            <div className="flex gap-4">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-blue-600/20 hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={member.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-pink-600/20 hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`mailto:${member.email}`}
                className="p-2 text-white transition-all duration-300 rounded-full bg-red-600/20 hover:bg-red-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div 
      onClick={() => setSelectedMember(member)}
      className="relative cursor-pointer group"
    >
      <div className="overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl">
        {/* Image with Zoom Effect */}
        <div className="relative aspect-[4/5]">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Member Info */}
        <div className="p-4 text-center">
          <h3 className="mb-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {member.name}
          </h3>
          <p className="text-sm text-gray-400">{member.designation}</p>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="container px-4 py-16 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            The brilliant minds behind Vertex Innovation, working together to shape the future of technology.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
        </div>
        {/* Join Team Section */}
        <div className="relative mt-20 overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative px-6 py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Join Our Team
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              We're always looking for talented individuals to join our innovative team. 
              Check out our open positions and become part of something extraordinary.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
};
export default TeamPage;

