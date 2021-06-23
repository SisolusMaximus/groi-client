import "./forgot-password-page.styles.scss"
import Button from "../../components/button/button.compontent"


import {useState} from "react"
import {useHistory} from "react-router-dom"

import {sendVerificationMessage} from "../../components/profile-page-menu/sendVerficationMessage.fetch"



const ForgotPasswordPage = () =>{

    const [state, setstate] = useState("")
    const history = useHistory()

    const handleChange = (e) =>{
        setstate(e.target.value)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSubmit()
        }
      }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append("username" , state)
        sendVerificationMessage(formData, history, "/user/sendVerificationMessageResetPassword")
        history.push("/profile/resetPassword", {username: state})
    }

    return(
        <div className="forgot-password-page">
            <div className={"forgot-password-page-titlebox"}>
                <span className={"forgot-password-page-titlebox-descriptor"}>
                    If you forgot password to your account, enter your username in field below.
                </span>
                <span className={"forgot-password-page-titlebox-descriptor"}>
                    We will send you a message with verification code on email address asigned to your account.
                </span>
                <span className={"forgot-password-page-titlebox-descriptor"}>
                    After this you will be redirected to page where you will be able to reset your password.
                </span>
                <span className={"forgot-password-page-titlebox-descriptor"}>
                    On that page use verification code sent to you to verify your identity.
                </span>
            </div>
            <div className="delete-profile-page-form">
                <div className={"form-input-container"}>
                <label htmlFor="username" className={"form-input-label"}>Username: </label>
                <input
                    type="text"
                    id="username"
                    className={`form-input`}
                    name="username"
                    onChange={(e)=> handleChange(e)}
                    onKeyPress={(e) =>{handleKeyPress(e)}}
                />
                </div>
            </div>
            <Button onClick={() =>{handleSubmit()}} color={"dark"}>Submit</Button>
        </div>
    )
}

export default ForgotPasswordPage