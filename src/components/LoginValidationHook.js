import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/apiUtils";
import {useForm} from "react-hook-form"
const LoginHook = () => {
  const { register, handleSubmit, watch, formState:{errors} } = useForm();  
  const [loading, setLoading] = useState(false); // Add a loading state
  const navigate = useNavigate();
  const onSubmit=(data)=>{ 

    setLoading(true); // Set loading to true when the form is submitted
    try {
      const response =  login({
        email: data.email,
        password: data.password,
      })
      response.then(function (response) {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.response);
        navigate("/dashboard");
      }).catch(function (error) {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
    setLoading(false); // Set loading to false after the response is received


  }
  return (
    <div className="container d-flex align-items-center justify-content-center">
      
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="h3 mb-3 font-weight-normal">Login here:</h2>        
        <div>
          <label htmlFor="username" className="sr-only">
            Username:
          </label>
          <input
            type="text"           
            id="username"            
            className="form-control"
            placeholder="Username"
             {...register("email", {required:true,  pattern : { value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:"Invalid email address detected"}
            })}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password:
          </label>
          <input
            type="password"
            {...register("password", {required:true})}
            id="password"            
            className="form-control"
            placeholder="Password"            
          />
        </div>
        
      
        {errors.email && <span> This field is required </span>}
      {errors.password && <span> This field is required </span>}
      {errors.email?.message && <span>{errors.email?.message }</span>}
        <button type="submit" className="btn btn-pink" disabled={loading}> {/* Disable the button while loading */}
          {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>} {/* Render the spinner if loading */}
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginHook;