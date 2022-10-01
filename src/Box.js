import React, {useContext} from "react";
import { turnContext } from "./index";

function Box(props) {

    const [isClicked, setIsClicked] = React.useState(false)
    const [symbol, setSymbol] = React.useState("")
    const {turn, changeTurn} = useContext(turnContext)

    function handleClick() {
        setIsClicked(true)
        changeTurn()
        if(symbol === "") {
            setSymbol(turn)
        }
    }


    return(
        <div onClick={handleClick} className="box">
            {isClicked && symbol}
        </div>
    )
}

export default Box