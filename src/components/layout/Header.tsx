import { Link } from "react-router-dom";
function Header(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/like">Like</Link>
            <span> | </span>
            <Link to="/Users">Users</Link>
        </nav>
        <Link to="/login" className="btn btn-primary">Login</Link> 
        </>
        
    )
}
export default Header