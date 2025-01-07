import HomePage from "./components/HomePage";
import BlogMainPage from "./components/BlogMainPage";
import ErrorPage from "./components/ErrorPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import CreateCommentPage from "./components/CreateCommentPage";
import ViewPostPage from "./components/ViewPostPage";

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
        path: "posts/:postId/comment",
        element: <CreateCommentPage />,
      },
      {
        path: "/posts/:postId",
        element: <ViewPostPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
