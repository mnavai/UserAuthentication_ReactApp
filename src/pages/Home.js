import { Link } from "react-router-dom";
// import img1 from "/images/img1.jpg";

const Home = () => {
    return (
        <div>
            <div>
                {/* <img src="/images/img1.jpg" alt="main image" /> */}
            </div>
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link">Register</Link>
        </div>
    )
}

export default Home;
