import "./form-input.styles.scss"
import {useState} from "react"

const FormInput = ({
    validator,
     name,
     type,
     additionalClasses,
     setValidationObject,
     validationObject,
     numOfField,
     
     ...props}) =>{

    const defaultState = {
        passedValidation: false,
        message:`*${name} can't be empty`
    }

    const [state, setState] = useState(defaultState)

    const validateForm = (e) =>{
        let result = undefined;
        numOfField === 8 ? 
            result = validator(e.target.files, name)
        :
            result = validator(e.target.value, name)
        ;
        const values = validationObject.values
        setState(result)
        numOfField === 8 ? values[numOfField] = e.target.files: values[numOfField] = e.target.value
        setValidationObject({...validationObject,
            [numOfField]: result.passedValidation,
            values: values
        })
    }

    return(
        <div className={"form-input-container"}>
            <label htmlFor={name} className={"form-input-label"}>{name}: </label>
            {state.message? 
                <span className={"form-input-msg-error"}>{state.message}</span>
                :
                <span className={"form-input-msg-ok"}>noerror</span>}
                <input
                    type={type}
                    id={name}
                    className={`form-input ${additionalClasses}`}
                    name={name}
                    onChange={(e) => {validateForm(e)}}
                    {...props}
                />
        </div>
    )
}

export default FormInput;