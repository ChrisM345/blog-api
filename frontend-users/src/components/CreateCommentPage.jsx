import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateCommentPage = () => {
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState("");
  const [error, setError] = useState("");

  const { postId } = useParams();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      //send request to backend and wait for a response
      const response = await fetch(`http://localhost:8000/posts/${postId}/comment`, {
        method: "POST",
        body: JSON.stringify({
          username: localStorage.getItem("username"),
          commentContent: commentContent,
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
      <h1>Create Comment</h1>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/posts/${postId}`}>Back</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="form">
        <form>
          <label className="label">Comment Content</label>
          <input onChange={handleCommentContentChange} className="input" value={commentContent} type="text" />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
        {error != "" && <div className="errorSection">Error: {error}</div>}
      </div>
    </>
  );
};

export default CreateCommentPage;
