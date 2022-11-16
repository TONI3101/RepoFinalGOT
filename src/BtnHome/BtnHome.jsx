import React from "react"
import { Link } from "react-router-dom"

const BtnHome = () => {

    return(
        
        <Link to="/"><div className="homebox">
        <img className="home" src="../../../home.png" alt="back"></img>
        </div></Link>
    )
}

export default BtnHome