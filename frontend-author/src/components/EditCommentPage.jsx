import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const EditCommentPage = () => {
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState("");
  const [error, setError] = useState("");
  const { postId, commentId } = useParams();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:8000/posts/${postId}/comment/${commentId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setCommentContent(data.content);
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
      const response = await fetch(`http://localhost:8000/posts/${postId}/comment/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({
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
      <h1>Edit Comment</h1>
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

export default EditCommentPage;
