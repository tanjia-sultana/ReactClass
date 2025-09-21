import { Link } from "react-router-dom";
import Users from "../data.json";
//import Footer from "./Footer";
//import Header from "./Header";

function User(){
     return (
        <>
        
        <div>
            <h1>Users</h1>
        </div>
     
                <ul>
                     {Users.map((item) => 
                    
                        <li key={item.id}>
                            <Link to={`/user/${item.id}`}>{item.name}</Link>
                        </li>
                    )
                }
                </ul>


     
        </>
    )
}
export default User