import { Link } from "react-router-dom";

const PostsPage = () => {
  return (
    <>
      <h1>Posts</h1>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PostsPage;
