function Event(){
    // function handleClick(){
    //     alert("Hello")
    // }
    const handleClick = () => {
        alert("Hello")
    }
    return(
        <>
        <h1>Event</h1>
        {/* <button onClick={() => alert("Hello")}>Click</button> */}
        <button onClick={handleClick}>Click</button>
        </>
    )
}
export default Event;