import { motion } from "framer-motion";
import shifan from "../../assets/team/studentHeads/Shifan.jpg";
import jothi from "../../assets/team/studentHeads/jothi.jpg";
import subadevan from "../../assets/team/studentHeads/subadevan.jpg";
const team = [
  { name: "Shifan", role: "Ambassador", image: shifan },
  { name: "Jothi", role: "Ambassador", image: jothi },
  { name: "Subadevan", role: "Ambassador", image: subadevan },
];
const TeamGrid = () => {
  return (
    <div className="py-12 bg-transparent">
      <div className="relative mx-auto text-center max-w-7xl">
        {/* Background gradients similar to hero section */}
        <div className="absolute rounded-full bg-blue-600/20 w-72 h-72 blur-3xl opacity-20 -top-20 -left-20" />
        <div className="absolute rounded-full bg-purple-600/20 w-72 h-72 blur-3xl opacity-20 -bottom-20 -right-20" />

        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
          Meet the Ambassador
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border-gray-700/50"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://forms.gle/5VW1KfU4UbKuHubJA', '_blank')}
          className="px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl hover:shadow-blue-500/20"
        >
          Apply as an Ambassador
        </motion.button>
      </div>
    </div>
  );
};

export default TeamGrid;
