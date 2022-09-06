import React from "react";

function Box() {

    function handleClick() {
        setIsClicked(true)
    }

    const [isClicked, setIsClicked] = React.useState(false)
    return(
        <div onClick={handleClick} className="box">
            {isClicked && "X"}
        </div>
    )
}

export default Box