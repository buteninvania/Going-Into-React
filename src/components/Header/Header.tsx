import React from "react"
import {NavLink} from "react-router-dom"
import h from "./header.module.css"

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className = {h.header}>
            <div className = {h.avatar}>
                <img alt = "logo" src = "https://sun9-52.userapi.com/c851120/v851120160/19fa57/I2WRc_mpc9E.jpg" />
                <div>
                    <div className = {h.text}>Butenin Ivan</div>
                </div>
            </div>
            <div className = {h.loginBlock}>{props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}