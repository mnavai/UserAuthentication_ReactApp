import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <div>
            <Link to="/login">
                <button type="submit" className="link"> 
                Logout
                </button>
            </Link>
        </div>
    )
}

export default Logout;