import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div>
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
                placeholder="Enter your name"
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
                placeholder="Enter your last name"
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
                placeholder="Enter your email"
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
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="link">Sign Up</button>
          </form>
        </div>
      </div>
      <style>
        {`
          input::placeholder {
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
