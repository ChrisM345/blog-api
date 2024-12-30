import { Link } from "react-router-dom";

const BlogMainPage = () => {
  const handleLogout = () => {
    // console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };

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
        </>
      )}
    </>
  );
};

export default BlogMainPage;
