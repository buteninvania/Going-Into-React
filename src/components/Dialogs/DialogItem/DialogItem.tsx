import React from "react"
import d from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className = {d.dialog}>
            <img src = {props.urlImg} alt = "daria"/>
            <NavLink to = {"/dialogs/" + props.id} className = {d.dialogNav} activeClassName = {d.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem

type PropsType = {
    urlImg: string
    id: number
    name: string
}
