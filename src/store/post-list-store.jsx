import { createContext, useReducer } from "react";

//Basic structure or contract design
export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

//ONly wraps the Post list context the components of the app
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to spain ",
    body: " Me and my friends are going to mumbai !!",
    reactions: 2,
    userID: "user-9",
    tags: ["vacation", "mumbai", "Enjoy"],
  },
  {
    id: "2",
    title: "College journey",
    body: "Hi my name is abhi i have graduated from the college this day!!",
    reactions: 30,
    userID: "user-13",
    tags: ["Graduated", "LifeOn", "VIT"],
  },
  {
    id: "3",
    title: "Going to lol ",
    body: " Me and my friends are going to lol !!",
    reactions: 4,
    userID: "user-91",
    tags: ["vacation", "mumbai", "Enjoy"],
  },
  {
    id: "4",
    title: "Going to holiday ",
    body: " Finally its summer and i am going to spend with my family  !!",
    reactions: 144,
    userID: "user-798",
    tags: ["vacation", "chennai", "Enjoy"],
  },
];

export default PostListProvider;
