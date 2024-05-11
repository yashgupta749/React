import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  //abort controller clean krta hai useEffect ko jb bhi ham page change  ya is postlist ko delete krte hai tb

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        console.log("data fetched");
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);
  //this means ki ye sirf initial time pr isko run krega because hamne [] empty diya hai koi condn list nhi di hai
  return (
    <>
      {fetching && <Loading></Loading>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
