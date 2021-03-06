import React from "react"
import d from "./../Dialogs.module.css"

const MessageItem: React.FC<PropsType> = (props) => {
    return (
        <div className = {d.messageItem}>
            <div>{props.message}</div>
        </div>
    )
}

export default MessageItem

type PropsType = {
    message: string
}
