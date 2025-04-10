import { motion, Variants } from "framer-motion";
import { Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import sohamGupta from "../../assets/team/collegeHeads/SohamGupta.jpg";
import Iniya from "../../assets/team/collegeHeads/Iniya.jpeg";
import Akshitha from "../../assets/team/collegeHeads/Akshitha.jpeg";
import Vikashini from "../../assets/team/collegeHeads/Vikasini.jpeg";
import Pravalikka from "../../assets/team/collegeHeads/pravalikka.jpeg";
// Enhanced team data with social links
const team = [
  {
    name: "Soham Gupta",
    role: "College Head - SRM Kattangalathur",
    image: sohamGupta, // Will be added manually
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/soham-gupta-822333-goat",
      instagram: "https://www.instagram.com/soh4mmm.exe/",
      email: "mailto:gupta.soham13@gmail.com"
    }
  },
  {
    name: "Deekshitha N",
    role: "College Head – Jerusalem College of Engineering",
    image: "", // Will be added manually
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/deekshitha-n-537503326",
      instagram: "https://www.instagram.com/deekshithanamadevan",
      email: "mailto:deekshithanamadev@gmail.com"
    }
  },
  {
    name: "Akshitha Gandhi Sankaranarayanan",
    role: "College Head - St.Joseph College of Engineering",
    image: Akshitha, // Will be added manually
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/akshitha-gandhi-sankaranarayanan-6731072b7",
      instagram: "https://www.instagram.com/_akshitha_18__/",
      email: "mailto:akshitha.chithra@gmail.com"
    }
  },
  {
    name: "Pravallika Bonu",
    role: "College Head – Chaitanya Deemed to be University",
    image: Pravalikka, // Will be added manually
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/pravallika-bonu-19jan2006",
      instagram: "https://www.instagram.com/chess_lover_19/",
      email: "mailto:pravallikabonu19@gmail.com"
    }
  },
  {
    name: "Iniya",
    role: "College Head - CIT Coimbatore",
    image: Iniya,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/iniya-rajendran-0b1a1b1b4",
      instagram: "https://www.instagram.com/iniya_rajendran/",
      email: "",
    }
  },
  {
    name: "Vikasni R",
    role: "College Head",
    image: Vikashini,
    bio: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/vikasni-r-711aba320/",
      instagram: "https://www.instagram.com/vikasni_24/",
      email: "arvikasni@zohomail.in",
    }
  }
];


// Animation variants for continuous scroll
const scrollVariants: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 25,
      ease: "linear",
    },
  },
};

const TeamGrid = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-transparent">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute rounded-full w-72 h-72 bg-blue-600/10 blur-3xl top-20 -left-20" />
        <div className="absolute w-64 h-64 rounded-full bg-purple-600/10 blur-3xl top-40 right-10" />
        <div className="absolute rounded-full w-80 h-80 bg-cyan-600/10 blur-3xl bottom-10 left-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.span 
            className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-blue-400 uppercase rounded-full bg-blue-600/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Team Vertex
          </motion.span>
          
          <motion.h2 
            className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Meet Our <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">College Heads</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Connecting students across colleges and fostering a collaborative educational ecosystem
          </motion.p>
        </div>

        {/* Continuous horizontal scroll of team members */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-10 py-4"
            variants={scrollVariants}
            animate="animate"
          >
            {/* Duplicate team members for continuous scroll */}
            {[...team, ...team, ...team].map((member, index) => (
              <motion.div 
                key={`${member.name}-${index}`}
                className="relative min-w-[280px] bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center shadow-xl group"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 30px rgba(0, 0, 0, 0.3)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 transition-opacity duration-700 rounded-full opacity-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-100 blur-xl" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 object-cover w-32 h-32 mx-auto transition-all duration-300 border-2 rounded-full border-white/10 group-hover:border-blue-400"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                
                <div className="px-3 py-1 mt-1 text-sm font-medium text-center text-blue-300 rounded-full align-center bg-blue-500/10">
                  {member.role}
                </div>
                
                <p className="mt-4 text-center text-gray-300">{member.bio}</p>
                
                {/* Social links */}
                <div className="flex items-center justify-center mt-6 space-x-4">
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 transition-colors rounded-full hover:bg-blue-900/30 hover:text-blue-400"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a 
                      href={member.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 transition-colors rounded-full hover:bg-pink-900/30 hover:text-pink-400"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a 
                      href={member.socials.email}
                      className="p-2 text-gray-400 transition-colors rounded-full hover:bg-green-900/30 hover:text-green-400"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.gle/5VW1KfU4UbKuHubJA', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 group"
          >
            Apply as an College Head
            <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;