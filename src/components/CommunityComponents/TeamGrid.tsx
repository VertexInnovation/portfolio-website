

const team = [
  { name: "Ananya S.", role: "Community Manager", image: "/images/team/ananya.jpg" },
  { name: "Rohit K.", role: "Tech Lead", image: "/images/team/rohit.jpg" },
  { name: "Sneha R.", role: "Event Coordinator", image: "/images/team/sneha.jpg" },
];

const TeamGrid = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 mt-8 text-white bg-blue-600 rounded-full hover:bg-blue-500">
          Apply as an Ambassador
        </button>
      </div>
    </div>
  );
};

export default TeamGrid;
