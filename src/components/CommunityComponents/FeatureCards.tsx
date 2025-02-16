// FeatureCards.jsx

const features = [
  {
    title: "Compete in Hackathons",
    description: "Team up with students from top colleges to solve real-world problems.",
    icon: "💡",
  },
  {
    title: "Network & Collaborate",
    description: "Connect with peers and mentors from across the country.",
    icon: "🤝",
  },
  {
    title: "Hands-on Learning",
    description: "Build real-world projects with expert guidance from Day 1.",
    icon: "🚀",
  },
];

const FeatureCards = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
