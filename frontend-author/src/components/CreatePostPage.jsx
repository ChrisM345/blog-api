import { Link } from "react-router-dom";

const CreatePostPage = () => {
  return (
    <>
      <h1>Create Post</h1>
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

export default CreatePostPage;
