import React from "react";

function Hobbies({hobbies = []}){
    const limit = hobbies.map((hobby,index)=>(
        <li key={index}>{hobby}</li>
    ))
    return(
        <div>
        <h2>Hobbies</h2>
        <ul>
            {limit}
        </ul>
        </div>
    )

}
export default Hobbies;