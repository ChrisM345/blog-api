import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const EditPostsPage = () => {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState("");
  const { postId } = useParams();

  const handleNavigate = () => {
    navigate("/");
  };

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:8000/posts/${postId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setPostTitle(data.title);
        setPostContent(data.content);
      } catch (error) {
        console.log(`Failed to fetch posts: ${error}`);
      }
    };

    fetchPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      //send request to backend and wait for a response
      const response = await fetch(`http://localhost:8000/posts/${postId}/`, {
        method: "PUT",
        body: JSON.stringify({
          postTitle: postTitle,
          postContent: postContent,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        setError(await response.text());
      } else {
        alert(await response.text());
        handleNavigate();
      }
    } catch {
      setError("Error Fetching Backend");
    }
  };

  return (
    <>
      <h1>Edit Post</h1>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="form">
        <form>
          <label className="label">Post Title</label>
          <input onChange={handlePostTitleChange} className="input" value={postTitle} type="text" />

          <label className="label">Post Content</label>
          <input onChange={handlePostContentChange} className="input" value={postContent} type="text" />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
        {error != "" && <div className="errorSection">Error: {error}</div>}
      </div>
    </>
  );
};

export default EditPostsPage;
