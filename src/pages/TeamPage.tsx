import React, { useState } from 'react';
import { Linkedin, Instagram, Mail, X } from 'lucide-react';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'John Smith',
      designation: 'CEO & Founder',
      image: '/api/placeholder/400/400',
      bio: 'John brings over 15 years of experience in technology innovation and leadership. He founded Vertex Innovation with the vision of transforming how businesses approach digital solutions.',
      linkedin: 'https://linkedin.com/in/johnsmith',
      instagram: 'https://instagram.com/johnsmith',
      email: 'john@vertexinnovation.com'
    },
    {
      name: 'Sarah Johnson',
      designation: 'Chief Technology Officer',
      image: '/api/placeholder/400/400',
      bio: 'With a Ph.D. in Computer Science and extensive experience in AI, Sarah leads our technical initiatives and ensures we stay at the cutting edge of innovation.',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      instagram: 'https://instagram.com/sarahjohnson',
      email: 'sarah@vertexinnovation.com'
    },
    {
      name: 'Michael Chen',
      designation: 'Lead Developer',
      image: '/api/placeholder/400/400',
      bio: 'Michael specializes in full-stack development and has led numerous successful projects for Fortune 500 companies.',
      linkedin: 'https://linkedin.com/in/michaelchen',
      instagram: 'https://instagram.com/michaelchen',
      email: 'michael@vertexinnovation.com'
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

  const TeamMemberCard = ({ member }) => (
    <div 
      onClick={() => setSelectedMember(member)}
      className="relative cursor-pointer group"
    >
      <div className="overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl">
        {/* Desktop Image Container */}
        <div className="relative aspect-[4/5]">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {/* Desktop Hover Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/70 group-hover:opacity-100">
            <div className="flex gap-4 mb-4 transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              <a 
                href={member.linkedin} 
                onClick={(e) => e.stopPropagation()}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-blue-600/20 hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={member.instagram}
                onClick={(e) => e.stopPropagation()}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-pink-600/20 hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`mailto:${member.email}`}
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-white transition-all duration-300 rounded-full bg-red-600/20 hover:bg-red-600"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="px-6 text-sm text-center text-gray-300">Click to view profile</p>
          </div>
        </div>
        
        {/* Member Info */}
        <div className="p-6 text-center">
          <h3 className="mb-1 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {member.name}
          </h3>
          <p className="text-gray-400">{member.designation}</p>
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
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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