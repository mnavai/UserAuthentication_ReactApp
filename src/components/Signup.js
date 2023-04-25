import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8077/api/v1/user/signup",
        newUser,
        {
          "name": name,
          "lastName":lastName,
          "email": email,
          "password":password
        }
      );
      console.log(response.data);
      navigate("/login");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last name:</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
