import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect"


import {setCurrentUser} from "../../redux/user/user.actions"
import {selectCurrentUser} from "../../redux/user/user.selectors.js"
import {setCurrentMessage} from "../../redux/message/message.actions"

import "./edit-profile-form.styles.scss"

import Button from "../button/button.compontent"
import FormInput from "../form-input/form-input.component"

import {
    usernameValidator,
    emailValidator
}
from "./edit-profile-form.validators"

import {editProfileFetch} from "./edit-profile-form.fetch"


const EditProfileForm = ({history, setCurrentUser, setCurrentMessage, user}) =>{

    const [validationObject, setValidationObject] = useState({
        1: true,
        2: true,
        3: true,
        values : ["", "", ""]
    })
    

    const [disableButton, setDisableButton] = useState(true)

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
        formData.append("username", validationObject.values[1])
        formData.append("email", validationObject.values[2])
        formData.append("phone", validationObject.values[3])

        editProfileFetch(formData, history, setCurrentUser, setCurrentMessage)
    }

   return (
        <div className={"edit-profile-form"}>
            <FormInput 
                name={"Username"} 
                validator={usernameValidator} 
                type={"text"}
                numOfField={1}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
                placeholder={user.username}
            />
            <FormInput 
                name={"Email"} 
                validator={emailValidator} 
                type={"email"}
                numOfField={2}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
                placeholder={user.email}
            />
            <FormInput 
                name={"Phone"} 
                validator={usernameValidator} 
                type={"text"}
                numOfField={3} 
                setValidationObject={setValidationObject}
                validationObject={validationObject}
                placeholder={user.phone}
            />
            <Button onClick={submit} disabled={disableButton} color={"dark"}>Submit</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfileForm));