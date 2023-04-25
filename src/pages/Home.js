import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>
                <img src="" alt="main page image"></img>
            </div>
            <Link to="/login">Login</Link>|
            <Link to="/signup">Register</Link>
        </div>
    )
}

export default Home;