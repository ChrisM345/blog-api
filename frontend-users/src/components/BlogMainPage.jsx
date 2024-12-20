import { Link } from "react-router-dom";

const BlogMainPage = () => {
  return (
    <>
      <h2>Welcome to my Blog Page</h2>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/auth/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BlogMainPage;
