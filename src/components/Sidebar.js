export default function Sidebar() {
  return (
    <div>
      <div className="max-w-[200px] bg-white rounded-lg  shadow-md mb-2">
        <div className="flex flex-col items-start mb-4">
          <img
            src="https://picsum.photos/seed/profileBanner/400/100"
            alt="Profile Banner"
            className="w-full rounded-t-lg h-14 object-cover"
          />
          <img
            src="https://picsum.photos/seed/profilePic/80"
            alt="Profile Pic"
            className="w-[80px] h-[80px] rounded-full border-4 border-white -mt-9 ml-4"
          />
          <div className="p-4">
            <h2 className="text-lg  font-semibold  mb-2">
              Hafiz M. Ahmed A...
            </h2>
            <p className="text-xs text-gray-500 mb-2">
              Student at Monotechnic Institute Of Technology
            </p>
            <p className="text-xs text-gray-500">Sindh</p>
          </div>
        </div>
      </div>

      <div className="max-w-[200px] bg-white rounded-lg p-4 shadow-md mb-2">
        <div className="space-y-3">
          <div className="  text-xs cursor-pointer">Profile viewers: 39</div>
          <div className="  text-xs cursor-pointer">Post impressions: 6</div>
        </div>
      </div>

      <div className="max-w-[200px] bg-white rounded-lg p-4 shadow-md mb-2">
        <div className="text-gray-600 text-xs cursor-pointer">Saved items</div>
        <div className="text-gray-600 text-xs cursor-pointer">Groups</div>
        <div className="text-gray-600 text-xs cursor-pointer">Events</div>
      </div>
    </div>
  );
}
