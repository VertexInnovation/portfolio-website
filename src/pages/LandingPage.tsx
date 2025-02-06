import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Transform Your Digital Experience with
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {' '}Next-Gen Solutions
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Elevate your business with AI-powered tools designed for modern challenges
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700">
              <Rocket className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="px-8 py-4 font-semibold text-blue-600 transition-all border-2 border-blue-600 rounded-xl hover:bg-blue-50">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden border border-gray-100 shadow-2xl rounded-3xl"
        >
          <img
            src="/dashboard-preview.jpg"
            alt="Platform interface"
            className="w-full h-[600px] object-cover object-top"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="grid gap-12 mx-auto md:grid-cols-3 max-w-7xl">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-6 bg-blue-100 w-14 h-14 rounded-xl">
                <feature.icon className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 text-white bg-blue-900">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-2 text-5xl font-bold">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Trusted by Innovators Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of companies transforming their digital presence
          </p>
        </div>

        <div className="grid gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white shadow-lg rounded-2xl"
            >
              <p className="mb-6 text-gray-600">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Data for Features Section
const FEATURES = [
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description:
      'Leverage machine learning for real-time analytics and predictive modeling',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description:
      'Military-grade encryption and compliance with global data standards',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Seamless workflow integration with role-based access control',
  },
];

// Data for Stats Section
const STATS = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '250k+', label: 'Active Users' },
  { value: '150+', label: 'Countries Served' },
  { value: '24/7', label: 'Customer Support' },
];

// Data for Testimonials Section
const TESTIMONIALS = [
  {
    quote: 'This platform revolutionized our data management strategy',
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    avatar: '/avatar-1.jpg',
  },
  {
    quote: "The most intuitive analytics dashboard we've used",
    name: 'Michael Chen',
    role: 'Product Lead at StartUpX',
    avatar: '/avatar-2.jpg',
  },
];

export default LandingPage;