import HomePage from "./components/HomePage";
import BlogMainPage from "./components/BlogMainPage";
import ErrorPage from "./components/ErrorPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import PostsPage from "./components/PostsPage";

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
        path: "/auth/signup",
        element: <SignupPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
