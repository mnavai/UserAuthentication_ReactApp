import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8077/api/v1/user/authenticate",
        {
          "email": username,
          "password": password
        },
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      navigate("/dashboard");
  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="h3 mb-3 font-weight-normal">Login</h2>
      <div>
        <label htmlFor="username" className="sr-only" htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
