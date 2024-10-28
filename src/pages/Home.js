import React from "react";
import Sidebar from "../components/Sidebar";
import PostInput from "../components/PostInput";
import Post from "../components/Post";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="flex space-x-4 justify-center pt-5 bg-gray-100 min-h-screen ">
        <Sidebar />
        <div>
          <PostInput />
          <Post />
        </div>
        <RightSidebar />
      </div>
    </div>
    // </div>
  );
}
