import React from "react";
// add border for div
function Schedule ({dailyActivities =[]}){
    const rows = dailyActivities.map(({time,description},index)=> (
        <tr>
            <td>{time}</td>
            <td>{description}</td>
        </tr>
    ))
    return(
       <table>
           <tbody>{rows}</tbody>
       </table>
    )

}
export default Schedule;