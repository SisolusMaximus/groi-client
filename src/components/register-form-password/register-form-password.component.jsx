import "./register-form-password.styles.scss"

import {useState} from "react"


const RegisterFormPassword = ({
     validator,
     additionalClasses,
     setValidationObject,
     validationObject,
     numOfField,
     ...props}) =>{

    const defaultState = {
        passedValidation: false,
        message:`*Password can't be empty`,
    }

    const [state, setState] = useState(defaultState)
    const [match, setMatch] = useState(
        {match: false,
        pswdValue: "",
    })


    const validateValue = (e) =>{
        const result = validator(e.target.value, "Password")
        setState(result)
        const values = validationObject.values
        values[numOfField] = e.target.value
        setValidationObject({...validationObject,
            values: values
        })
        setMatch({
            ...match,
            match: false,
            pswdValue: e.target.value
            })
    }

    const validateMatch = (e) =>{
        if(e.target.value === match.pswdValue){
            setValidationObject({...validationObject,
                [numOfField]: true,
            })
            setMatch({
                ...match,
                match: true
            })
        } else {
            setValidationObject({...validationObject,
                [numOfField]: false,
            })
            setMatch({
                ...match,
                match: false
            })
        }
    }

    return(
    <div className={"register-form-password"}>
        <div className={"register-form-password-container"}>
            <label htmlFor={"password"} className={"register-form-password-label"}>Password: </label>
            {state.message? 
                <span className={"register-form-password-msg-error"}>{state.message}</span>
                :
                <span className={"register-form-password-msg-ok"}>noerror</span>}
                <input
                    type="password"
                    id="password"
                    className={`register-form-password-input ${additionalClasses}`}
                    name="Password"
                    onChange={(e) => {validateValue(e)}}
                    {...props}
                />
        </div>
        <div className={"register-form-password-container"}>
            <label htmlFor={"confirm-password"} className={"register-form-password-label"}>Confirm password: </label>
            {!match.match? 
                <span className={"register-form-password-msg-error"}>
                Passwords don't match
                </span>
                :
                <span className={"register-form-password-msg-ok"}>noerror</span>}
                <input
                    type="password"
                    id="confirm-password"
                    className={`register-form-password-input ${additionalClasses}`}
                    name="confirm-password"
                    onChange={(e) => {validateMatch(e)}}
                    {...props}
                />
        </div>
    </div>
    )
}



export default RegisterFormPassword;