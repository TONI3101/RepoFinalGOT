import React from "react"
import { Link } from "react-router-dom"

const Back = () => {

    return(
        
        <Link to="/houses"><div className="buttonbox">
        <img className="back" src="../../../arrow.png" alt="back"></img>
        </div></Link>
    )
}

export default Back