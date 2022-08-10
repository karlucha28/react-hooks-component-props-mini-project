import { useState } from "react";
import React from "react";

 function Article({title, date, preview}) {
    const [display, setDisplay] = useState(true);
    //display falce => display 'none'
    //display true => display: 'block'
    const handleClick = function (){
        console.log('clicked');
        let newDisplay = !display;
        setDisplay(newDisplay)
    }
    return(
        //jsx
        <article>
            <h3 onClick = {handleClick}>{title}</h3>
            <small>
               {date}
            </small>
            <p style ={{display: display ? "block" : "none"}}>{preview}</p> 
        </article>
    )
}

export default Article




