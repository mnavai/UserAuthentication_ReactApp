import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/Users/mnavai/Desktop/My Practice File/user-authentication/src/index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8077/api/v1/user/authenticate",
        {
          email: username,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="h3 mb-3 font-weight-normal">Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div>
          <label htmlFor="username" className="sr-only">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-pink">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
