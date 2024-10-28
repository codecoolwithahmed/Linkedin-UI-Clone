export default function Post() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
    {
      id: 1,
      author: {
        name: "Ahmed Khan",
        avatar: "https://picsum.photos/seed/postAuthorPic2/80",
        time: "1h",
        following: false,
      },
      content:
        "Exploring new ways to improve my backend development skills. Just finished a project in Node.js...",
      image: "https://picsum.photos/seed/postImage2/600/300",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 ">
      {posts.map((post, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 mb-4 max-w-[500px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">{post.author.name}</h3>
                <p className="text-xs text-gray-500">
                  {post.author.time} •{" "}
                  {post.author.following ? "Following" : "Follow"}
                </p>
              </div>
            </div>
            <button className="text-gray-500">⋮</button>
          </div>
          <p className="text-sm mt-2">{post.content}</p>
          <img src={post.image} alt="Post" className="w-full mt-2 rounded-lg" />
          <div className="flex justify-around  pt-4 text-sm text-gray-500 border-t">
            <button className="hover:text-blue-500">Like</button>
            <button className="hover:text-blue-500">Comment</button>
            <button className="hover:text-blue-500">Repost</button>
            <button className="hover:text-blue-500">Send</button>
          </div>
        </div>
      ))}
    </div>
  );
}
