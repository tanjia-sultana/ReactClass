// import {baselink as blink} from "./Config.tsx";
// import Demo from "./Config";
//import Header from "./Header";
import { useState,useEffect } from "react";
//import Footer from "./Footer";

function UseState() {
    //let Like = 0;
    let [like, setLike] = useState(0);
    useEffect(() => {
        console.log("useEffect");
    },[like]);
    return (
        <>
       
        <div className="container text-center">
        <div>UseState</div>
         {/* {blink.link}
         <h3>{Demo}</h3> */}
         <h2>Like: {like}</h2>
        <button onClick={() => setLike(like + 1)}>👍</button>
        {/* {like > 0 ?
        <button onClick={() => setLike(like -1)}>👎</button>
        :null
         } */}
        {like > 0 &&
        <button onClick={() => setLike(like -1)}>👎</button>
         }
        </div>
      
        </>
    )
}

export default UseState;