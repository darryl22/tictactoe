import React from "react"
import ReactDOM from "react-dom"
import Box from "./Box"
import "./styles.css"

export const turnContext = React.createContext()

function Page() {
    const [turn, setTurn] = React.useState("O")
    const [symbolArray, setSymbolArray] = (["", "", "", "", "", "", "", "", ""])

    function changeTurn() {
        setTurn(prevTurn => {
            if(prevTurn === "O") {
                return "X"
            } else {
                return "O"
            }
        })
    }

    function handleSymbolArray(i) {
        setSymbolArray(prevArray => {
            return [...prevArray, prevArray[i] === turn]
        }) 
    }

    return(
        <div>
            <nav>
                <h1>Tic Tac Toe</h1>
            </nav>

            <div className="game-container">
                <turnContext.Provider value={{turn, changeTurn, symbolArray, handleSymbolArray}}>
                    <Box index={1}/>
                    <Box index={2}/>
                    <Box index={3}/>
                    <Box index={4}/>
                    <Box index={5}/>
                    <Box index={6}/>
                    <Box index={7}/>
                    <Box index={8}/>
                    <Box index={9}/>
                </turnContext.Provider>
            </div>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))