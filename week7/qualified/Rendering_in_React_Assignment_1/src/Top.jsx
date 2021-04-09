import React from "react";
import "./App.css";
function Top({name="", birthday="", imageSrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"}){
    
    return(
        <div>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
        <img src ={imageSrc}></img>
        </div>
    )
}
export default Top;