import React, { useContext } from "react";
import Post from "../Card/Post";
import { PostListData } from "../../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="mybox">
      {postList.map((post) => (
        <div className="minibox" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
