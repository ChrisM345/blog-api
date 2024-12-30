import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [error, setError] = useState("");

  const handleNavigate = () => {
    navigate("/");
  };
  const handleNameChange = (e) => {
    if (e.target.value != "") {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
    setUsername(e.target.value.trim());
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.trim().length >= 4) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    setPassword(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      //send request to backend and wait for a response
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
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
      <h2>Signup</h2>
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

      <div className="form">
        <h2>User Registration</h2>
        <p>Password must contain at least four characters</p>
        <form>
          <label className="label">Username</label>
          <input onChange={handleNameChange} className="input" value={username} type="text" />

          <label className="label">Password</label>
          <input onChange={handlePasswordChange} className="input" value={password} type="password" />

          <button onClick={handleSubmit} className="btn" type="submit" disabled={!validUsername || !validPassword}>
            Submit
          </button>
        </form>
        {error != "" && <div className="errorSection">Error: {error}</div>}
      </div>
    </>
  );
};

export default SignupPage;
