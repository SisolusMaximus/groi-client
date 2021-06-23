import {useState, useEffect} from "react"
import {withRouter, useLocation} from "react-router-dom"
import {connect} from 'react-redux'
import {setCurrentMessage} from "../../redux/message/message.actions"

import "./reset-password-form.styles.scss"

import Button from "../button/button.compontent"
import FormInput from "../form-input/form-input.component"
import RegisterFormPassword from "../register-form-password/register-form-password.component"

import {
    passwordValidator,
    verifictionCodeValidator
}
from "./reset-password-form.validators"

import {resetPasswordFetch} from "./reset-password-form.fetch.js"   


const ResetPasswordForm = ({history, setCurrentMessage}) =>{

    const [validationObject, setValidationObject] = useState({
        1: false,
        2: false,
        values : ["", "", ""]
    })
    
    const [disableButton, setDisableButton] = useState(true)

    const prevState = useLocation().state
    let username = undefined

    if (prevState){
        username = prevState.username
    }
    useEffect(() => {
        if (Object.values(validationObject).includes(false)){
            setDisableButton(true)
        }
        else {
            setDisableButton(false)
        }
    }, [validationObject])

    const submit = () =>{
        const formData = new FormData();
        formData.append("validationCode", validationObject.values[1])
        formData.append("password", validationObject.values[2])
        if(username){
            formData.append("username", username)
        }
        resetPasswordFetch(formData, history, setCurrentMessage)
    }

   return (
        <div className={"reset-password-form"}>
            <FormInput 
                name={"Verification code"} 
                validator={verifictionCodeValidator} 
                type={"text"}
                numOfField={1}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <RegisterFormPassword 
                validator={passwordValidator} 
                numOfField={2}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <Button onClick={submit} disabled={disableButton} color={"dark"}>Submit</Button>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})


export default connect(null, mapDispatchToProps)(withRouter(ResetPasswordForm));