import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";

const router = createBrowserRouter([
  // { path: "/", element: <App /> }, //default path addresss
  // { path: "/create-post", element: <CreatePost /> },// this return the create post page only sidebar kuch nhi aaega

  {
    path: "/",
    element: <App />,
    //layout route
    children: [
      { path: "/create-post", element: <CreatePost /> },
      { path: "/", element: <PostList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
