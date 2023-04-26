import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/apiUtils";
// import "/Users/mnavai/Desktop/My Practice File/user-authentication/src/index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add a loading state
  const navigate = useNavigate();

  const handleSubmit =  (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {

      const response =  login({
        email: username,
        password: password,
      })

     // console.log("the reposne from login api utils " + JSON.stringify(response))
      response.then(function (response) {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.response);
        navigate("/dashboard");
      }).catch(function (error) {
        console.error(error);
      });
      
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid username or password");
      // console.error(error);
      // if (error.response && error.response.status === 401) {
      //   setErrorMessage("Invalid username or password");
      // } else {
      //   setErrorMessage("An error occurred. Please try again later.");
      // }
    }
    setLoading(false); // Set loading to false after the response is received
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="h3 mb-3 font-weight-normal">Login here:</h2>
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
        <button type="submit" className="btn btn-pink" disabled={loading}> {/* Disable the button while loading */}
          {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>} {/* Render the spinner if loading */}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
