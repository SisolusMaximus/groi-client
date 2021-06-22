import './profile-page-menu.styles.scss'
import {useHistory} from "react-router-dom"

import {sendVerificationMessage} from "./sendVerficationMessage.fetch.js"


const ProfilePageMenu = ({toggleMenu}) =>{

    const history = useHistory()

    const handleRedirect = (url) =>{
        toggleMenu()
        history.push(`/profile${url}`)
    }

    const handleResetPasswordRedirect = () =>{
        toggleMenu()
        history.push(`/profile/resetPassword`)
        sendVerificationMessage(undefined, history,"/user/sendVerificationMessageResetPassword" )
    }

    const handleDeleteAccountRedirect = () =>{
        toggleMenu()
        history.push(`/profile/delete`)
        sendVerificationMessage(undefined, history, "/user/sendVerificationMessageDeleteAccount")
    }


    return (
        <div className="profile-page-menu">
            <span onClick={() => {handleRedirect("/edit")}} className={'profile-page-menu-option'}>Edit profile</span>
            <span onClick={() => {handleResetPasswordRedirect()}} className={'profile-page-menu-option'}>Reset password</span>
            <span onClick={() => {handleDeleteAccountRedirect()}} className={'profile-page-menu-option'}>Delete profile</span>
        </div>
    )
}

export default ProfilePageMenu