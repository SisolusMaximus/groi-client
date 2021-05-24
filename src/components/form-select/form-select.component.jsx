import "./form-select.component.scss"
import {useState} from "react"

const FormSelect= ({
     validator,
     optionsValues,
     name,
     additionalClasses,
     setValidationObject,
     validationObject,
     numOfField,
     ...props}) =>
    {

    const [state, setState] = useState( {
        passedValidation: false,
        message:`*${name} can't be empty`
    })

    const validateForm = (e) =>{
        const values = validationObject.values
        const result = validator(e.target.value)
        setState(result)
        values[numOfField] = e.target.value
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
                <select className={"form-input"}
                    name={name}
                    onChange={(e) => {validateForm(e)}}
                    {...props}
                >
                { optionsValues.map( (entry) => (<option key={entry} value={entry}>{entry}</option>))}
                </select>
        </div>
    )
}

export default FormSelect;