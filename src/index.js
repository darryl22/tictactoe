import React from "react"
import ReactDOM from "react-dom"
import Box from "./Box"
import "./styles.css"

function Page() {
    return(
        <div>
            <nav>
                <h1>Tic Tac Toe</h1>
            </nav>

            <div className="game-container">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))