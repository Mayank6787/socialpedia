import React, { useContext } from "react";

import "../PostList/PostList.css";
import { AiFillDelete } from "react-icons/ai";

import { PostListData } from "../../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {post.reactions}
          </span>
          <span
            className="position-absolute bottom-0 start-100  translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tag) => (
            <span key={tag} className="badge m-1 rounded badge text-bg-dark">
              {tag}
            </span>
          ))}
          <div className="alert alert-primary" role="alert">
            You have {post.reactions} reactions on your post !!!!
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
