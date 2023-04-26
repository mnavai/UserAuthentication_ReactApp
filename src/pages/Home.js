import { Link } from "react-router-dom";
// import img1 from "/images/img1.jpg";

const Home = () => {
    return (
        <div>
            <div>
                <img src="/images/logo.png" className="logo" alt="main image" /> 
            </div>
            <h2>Welcome to our little shop!</h2>
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link">Register</Link>
        </div>
    )
}

export default Home;
