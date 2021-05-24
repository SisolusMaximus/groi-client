import "./message-notification.style.scss"
import { ReactComponent as WarningIcon} from '../../assets/icon_warning.svg';

import {connect} from "react-redux"
import {createStructuredSelector} from 'reselect'

import {setCurrentMessage} from "../../redux/message/message.actions.js"
import {selectCurrentMessage} from "../../redux/message/message.selectors.js"

import { useLocation} from 'react-router-dom'
import {useState, useEffect} from "react"

const MessageNotification = ({setCurrentMessage, message}) =>{

    const location = useLocation()
    const [currentPath, setCurrentPath] =  useState(location.pathname)

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    const handleMessageClose = (payload)=>{
        setCurrentMessage(payload)
    }

    
    return(
    <div>{message?
        <div className={currentPath === "/"? "message-notification homepage-msg": "message-notification" }>
            {console.log(message)}
            <WarningIcon/><span className="message-notification-text">{message}</span>
            <span onClick={()=>{handleMessageClose(null)}} className="message-notification-button" >x</span>
        </div>:
        ""
    }</div>
    )
    

}   

const mapStateToProps = createStructuredSelector({
    message: selectCurrentMessage
})

const mapDispatchToProps = dispatch =>({
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message)),
})




export default connect(mapStateToProps, mapDispatchToProps)(MessageNotification)