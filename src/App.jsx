import { useState } from "react";
import "./App.css";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import CreatePost from "./components/Post/CreatePost";
import PostList from "./components/PostList/PostList";
import Sidebar from "./components/SiderBar/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  //This state maitians what to render
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          {/* <Footer /> */}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
