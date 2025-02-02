// LandingPage.tsx
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Sparkles, Users} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Digital Experience with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Next-Gen Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Elevate your business with AI-powered tools designed for modern challenges
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-20 rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <img 
            src="/dashboard-preview.jpg" 
            alt="Platform interface"
            className="w-full h-[600px] object-cover object-top"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Innovators Worldwide
          </h2>
          <p className="text-gray-600 text-xl">
            Join thousands of companies transforming their digital presence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Leverage machine learning for real-time analytics and predictive modeling"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance with global data standards"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflow integration with role-based access control"
  }
];

const STATS = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "250k+", label: "Active Users" },
  { value: "150+", label: "Countries Served" },
  { value: "24/7", label: "Customer Support" }
];

const TESTIMONIALS = [
  {
    quote: "This platform revolutionized our data management strategy",
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    avatar: "/avatar-1.jpg"
  },
  {
    quote: "The most intuitive analytics dashboard we've used",
    name: "Michael Chen",
    role: "Product Lead at StartUpX",
    avatar: "/avatar-2.jpg"
  }
];

export default LandingPage;
