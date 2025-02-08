
import { motion } from 'framer-motion';
import { Rocket, Zap, Users, Target, Brain, Building } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Where Tech Meets
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {' '}Entertainment
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Connect with students across colleges, participate in hackathons, and unlock exciting opportunities - all while having fun!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700">
              <Rocket className="w-5 h-5" />
              Join Us Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
          Things You Can Do in Vertex
        </h2>
        <div className="grid gap-8 mx-auto md:grid-cols-3 max-w-7xl">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-2xl">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white shadow-lg rounded-xl"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-900">About Vertex 🚀</h2>
          <p className="mb-12 text-xl text-gray-600">
            Vertex is an EdTech entertainment platform that connects students across colleges, 
            fosters collaboration, and bridges academia with industry—all while making learning 
            fun and interactive!
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {FEATURES_EXTENDED.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-left bg-white shadow-lg rounded-xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FEATURES = [
  {
    icon: Zap,
    title: '⚡ Compete in Hackathons & Events',
    description: 'Show off your skills, team up with students from top colleges, and solve real-world problems in high-energy hackathons!',
  },
  {
    icon: Users,
    title: '🔥 Network, Collaborate & Grow',
    description: 'Connect with students from IITs, NITs, and top universities across the country with AI-powered matchmaking.',
  },
  {
    icon: Target,
    title: '🎯 Experience Hands-On Learning',
    description: 'Build real-world projects from Day 1 with hardware kits, premium tools, and expert guidance.',
  },
];

const STATS = [
  { value: '10K+', label: 'Active Students' },
  { value: '50+', label: 'Partner Colleges' },
  { value: '100+', label: 'Events Hosted' },
  { value: '1000+', label: 'Projects Built' },
];

const FAQS = [
  {
    question: '❓ What makes Vertex different?',
    answer: 'Vertex blends education with entertainment, offering gamified learning, real-world projects, and a vibrant student community—think LinkedIn meets Tinder, but for learning & innovation!',
  },
  {
    question: '❓ Who can join Vertex?',
    answer: 'Anyone! Whether you\'re a beginner or an advanced learner, Vertex is open to college students, tech enthusiasts, and innovators from all backgrounds.',
  },
  {
    question: '❓ Do I need prior coding experience?',
    answer: 'Nope! Our beginner-friendly bootcamps and events provide all the guidance, tools, and resources to help you learn and build from scratch.',
  },
  {
    question: '❓ What can I gain from Vertex?',
    answer: 'Youapos#39l get hands-on experience, inter-college collaborations, industry exposure, and even job opportunities—all while having fun!'
  },
];

const FEATURES_EXTENDED = [
  {
    title: '🔹 Inter-College Collaboration',
    description: 'Work with students from different colleges on projects, hackathons, and competitions—all on one platform.',
  },
  {
    title: '🔹 Event Hub for Colleges',
    description: 'Discover, register, and participate in exclusive college events, tech fests, and hackathons seamlessly.',
  },
  {
    title: '🔹 Real-World Skill Application',
    description: 'Move beyond theory—build real projects, solve industry challenges, and gain hands-on experience from Day 1.',
  },
  {
    title: '🔹 Direct Industry Exposure',
    description: 'Get noticed by recruiters not just for resumes, but for your projects and skills.',
  },
];

export default LandingPage;