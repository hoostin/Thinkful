import React from "react";

function Clock() {
    const dateObj = new Date();
    const time = dateObj.getHours();
    //console.log(time)
    switch(true)
    {
        case (time <= 12): 
        return <p>Good Morning!</p>
        break;

        case (time < 18): 
        return <p>Good Afternoon!</p>
        break;

        case (time >18): 
        return <p>Good Evening!</p>
        break;

        default: return <p>Broken Switch</p>
    }
}

export default Clock;