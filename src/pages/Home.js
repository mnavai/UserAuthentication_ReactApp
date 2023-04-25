import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/login">Login</Link>|
            <Link to="/signup">Register</Link>
        </div>
    )
}

export default Home;