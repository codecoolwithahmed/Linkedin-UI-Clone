export default function RightSidebar() {
  const recommendations = [
    {
      id: 1,
      name: "Amine BOUDER",
      role: "Top Voice in Manufacturing, Logistics & Supply Chain",
      image: "https://picsum.photos/seed/recommend1/50",
    },
    {
      id: 2,
      name: "Amine BOUDER",
      role: "Top Voice in Manufacturing, Logistics & Supply Chain",
      image: "https://picsum.photos/seed/recommend1/50",
    },
    {
      id: 3,
      name: "Amine BOUDER",
      role: "Top Voice in Manufacturing, Logistics & Supply Chain",
      image: "https://picsum.photos/seed/recommend1/50",
    },
  ];

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 ">
      <div className="max-w-[350px] max-w-sm bg-white rounded-lg shadow-lg p-5  ">
        <h3 className="text-lg font-semibold mb-3">Add to your feed</h3>

        {recommendations.map((recommend) => (
          <div
            key={recommend.id}
            className="flex items-start justify-between max-w-[300px] p-2 hover:bg-gray-50 rounded-lg transition duration-150 "
          >
            <div className="flex items-start space-x-3">
              <img
                src={recommend.image}
                alt={recommend.name}
                className="w-[50px] h-[50px] rounded-full mr-6 mt-1"
              />
            </div>
            <div>
              <div>
                <h4 className="text-sm font-semibold overflow-hidden text-ellipsis w-full line-clamp-1">
                  {recommend.name}
                </h4>
                <p className="text-xs text-gray-500 overflow-hidden text-ellipsis w-full line-clamp-2">
                  {recommend.role}
                </p>
              </div>
              <button className="mt-3 px-4 py-1 border rounded-full text-sm font-semibold  hover:bg-blue-100 transition duration-150 ">
                + Follow
              </button>
            </div>
          </div>
        ))}

        <button className="text-sm text-gray-600 hover:underline mt-2 w-full text-left">
          View all recommendations →
        </button>
      </div>
    </div>
  );
}
