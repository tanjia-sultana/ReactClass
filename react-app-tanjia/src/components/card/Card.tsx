import SocialLink from "../SocialLink"
// import "./Card.css"
import Icon from "./assets/react.svg"
const card = {
    border:"5px solid rgba(122, 72, 11, 1)",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    color: "brown"
}
function Card(){
    return(
        <>
        <div style={card}>
        <img src={Icon} alt="" />
        <h1>User Name</h1>
        <h2>Designation</h2>
        <SocialLink/>
        </div>
        </>
    )
}
export default Card