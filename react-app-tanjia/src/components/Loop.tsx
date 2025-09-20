import Users from  "../data.json";
function Loop(){
    return (
        <>
        <div>
            <h1>Loop</h1>
        </div>
        {/* {console.log(Users)} */}
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Round</th>
                </tr>
            </thead>
            <tbody>
                {Users.map((item) => {
                    return (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.round}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Loop