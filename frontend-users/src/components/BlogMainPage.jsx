import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogMainPage = () => {
  const [posts, setPosts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:8000/posts", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(`Failed to fetch posts: ${error}`);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Welcome to my Blog Page</h1>
      {!localStorage.getItem("token") ? (
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
      ) : (
        <>
          <h1>Welcome {localStorage.getItem("username")}</h1>
          <div className="links">
            <nav>
              <ul>
                <li>
                  <button className="btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="postSection">
            {posts.map((post) => {
              return (
                <div key={post.id} className="post">
                  <h1>{post.title}</h1>
                  {post.content}
                  <ul>
                    <li>
                      <button className="btn">
                        <Link to={`posts/${post.id}`}>View Post and Comments</Link>
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default BlogMainPage;
