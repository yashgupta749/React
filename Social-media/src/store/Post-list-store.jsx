import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  delPost: () => {},
});

//ye hame pura function bana rahi hai jisko ham as a provider me use krne wale hai

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
    //filter tru return krega then wo cheez usme rakhi jaegi or wo hai or aagr false mtlb ki usko delete krna hai ya fir wo usme nhi reh skti
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  //usereducer or createcontext dono alag hai wo ek dusre se link nhi hai un dono ka apna alag work hai
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  // simply isme ham sirf post list ka work kr rahe hai

  const addPost = (userId, postTitle, PostBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: PostBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const delPost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  // this is how we used useCallback

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        delPost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends,I am going to Mumbai",
    reactions: 2,
    userId: "user-1",
    tags: ["vacations", "Mumbai"],
  },

  {
    id: "2",
    title: "Sleep Day",
    body: "Sunday is here",
    reactions: 4,
    userId: "user-2",
    tags: ["Sunday"],
  },
];

export default PostListProvider;
