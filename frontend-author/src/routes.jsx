import HomePage from "./components/HomePage";
import BlogMainPage from "./components/BlogMainPage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import PostsPage from "./components/PostsPage";
import CreatePostPage from "./components/CreatePostPage";
import AdminSignupPage from "./components/AdminSignupPage";

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
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
