import React, { useContext, useRef } from "react";
import Container from "../Container";
import { PostListData } from "../../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactions.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <Container>
      <form className="create-post" onSubmit={handleOnSubmit}>
        <div className="container">
          <div className="mb-3 post">
            <label htmlFor="userId" className="form-label">
              Enter User Id here
            </label>
            <input
              type="text"
              className="form-control"
              id="UserId"
              placeholder="Enter UserId"
              ref={userIdElement}
            />
            <label htmlFor="title" className="form-label">
              Title for the post
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter an appropriate title for the post"
              ref={postTitleElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              className="form-control"
              id="body"
              ref={postBodyElement}
            ></textarea>

            <label htmlFor="title" className="form-label">
              Enter no. of Reactions
            </label>
            <input
              type="number"
              ref={reactionsElement}
              className="form-control"
              id="reactions"
              placeholder="Enter no.of person's reaction "
            />

            <label htmlFor="title" className="form-label">
              Enter you tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              ref={tagsElement}
              placeholder="Enter tag with spaces!! "
            />

            <button
              type="submit"
              className="btn btn-dark text-center mybtn mt-3 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default CreatePost;
