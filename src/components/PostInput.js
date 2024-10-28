export default function PostInput() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-[500px]">
      <div className="flex items-center space-x-2">
        <img
          src="https://picsum.photos/seed/postInputPic/80"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Start a post, try writing with AI"
          className="w-full p-2 bg-gray-100 rounded-full outline-none text-sm"
        />
      </div>
      <div className="flex justify-around mt-2 text-sm text-gray-500">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>📷</span>
          <span>Media</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>📅</span>
          <span>Event</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span>✍️</span>
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
}
