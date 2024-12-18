import BlogMainPage from "./components/BlogMainPage";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <BlogMainPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
