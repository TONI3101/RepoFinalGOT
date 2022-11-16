import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MyContext } from "../components/mycontext/MyContext"

const Footer = () => {
    const {t} = useContext(MyContext)

    return(
    <>
    <div className="navBar">
        <NavLink className="link" activeclassname={'active'} to="/characters"> {t('personajes')} </NavLink>
        <NavLink className="link" activeclassname={'active'} to="/houses">{t('casas')}</NavLink>
        <NavLink className="link"  activeclassname={'active'} to="/cronologia">{t('crono')}</NavLink>
    </div>

    </>
    )
}

export default Footer