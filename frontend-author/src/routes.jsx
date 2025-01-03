import HomePage from "./components/HomePage";
import BlogMainPage from "./components/BlogMainPage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import PostsPage from "./components/PostsPage";
import CreatePostPage from "./components/CreatePostPage";
import AdminSignupPage from "./components/AdminSignupPage";
import ViewPostPage from "./components/ViewPostPage";
import CreateCommentPage from "./components/CreateCommentPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <BlogMainPage />,
      },
      {
        path: "/auth/signup/admin",
        element: <AdminSignupPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/create",
        element: <CreatePostPage />,
      },
      {
        path: "/posts/:postId",
        element: <ViewPostPage />,
      },
      {
        path: "posts/:postId/comment",
        element: <CreateCommentPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
