import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPostPage = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:8000/posts/${postId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setPost(data);
      } catch (error) {
        console.log(`Failed to fetch posts: ${error}`);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:8000/posts/${postId}/comments`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setComments(data);
      } catch (error) {
        console.log(`Failed to fetch comments: ${error}`);
      }
    };
    fetchComments();
  }, []);

  return (
    <>
      <h1>Post Details</h1>
      {!localStorage.getItem("token") ? (
        <h1>You are not logged in</h1>
      ) : (
        <>
          <div className="links">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="postSection">
            <h1>{post.title}</h1>
            {post.content}
            <ul>
              <li>
                <button className="btn">
                  <Link to={`comment/`}>Add Comment</Link>
                </button>
              </li>
            </ul>
            <h2>Comments</h2>
            {comments.map((comment) => {
              return (
                <div key={comment.id} className="comment">
                  {comment.content}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ViewPostPage;
