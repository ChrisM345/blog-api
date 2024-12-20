import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
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

export default LoginPage;
