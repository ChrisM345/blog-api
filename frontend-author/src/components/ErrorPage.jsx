import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error - You should not have gotten to this page.</h1>
      <Link to="/">Return to home page by clicking here.</Link>
    </div>
  );
};

export default ErrorPage;
