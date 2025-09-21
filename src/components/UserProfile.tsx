import { useParams } from "react-router-dom";
import Data from "../data.json";


function UserProfile() {
    const params = useParams<{id: string}>();
    //console.log(params); 
    //console.log (UserData); 
    const user = Data.find((item) => item.id ==Number(params.id));      
    //console.log(user);                             
        return (
            <>                
            <h1>Profile{params.id}</h1>  
            <div> <b>Name:</b>{user?.name} </div>    
            <div> <b>Email:</b>{user?.email} </div>    
            <div> <b>Round:</b>{user?.round} </div>
            
            </>
        )
}

export default UserProfile;