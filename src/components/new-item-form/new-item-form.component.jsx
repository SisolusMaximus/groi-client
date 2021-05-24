import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"

import "./new-item-form.styles.scss"

import FormEditor from "../form-editor/form-editor.component"
import Button from "../button/button.compontent"
import FormInput from "../form-input/form-input.component"
import FormSelect from "../form-select/form-select.component"

import {nameValidator
    , priceValidator
    , imageValidator
    ,currencyValidator,
    categoryValidator
}
from "../../components/new-item-form/new-item.validators"


import {api_url, categories} from "../../variables"

const NewItemForm = ({history}) =>{

    const [validationObject, setValidationObject] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false, 
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        values : []
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
        formData.append("name", validationObject.values[1])
        formData.append("price", validationObject.values[2])
        formData.append("description", validationObject.values[3])
        formData.append("condition", validationObject.values[4])
        formData.append("adress", validationObject.values[5])
        formData.append("city", validationObject.values[6])
        formData.append("state", validationObject.values[7])
        formData.append("currency", validationObject.values[9])
        formData.append("country", validationObject.values[10])
        formData.append("category", validationObject.values[11])

        for(let i=0; i<validationObject.values[8].length; i++){
            formData.append("images", validationObject.values[8][i])
        }
        
        fetch(
			`${api_url}/new`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				history.replace(`/${result.data._id}`)
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }

   return (
        <div className={"new-item-page-form"}>
            <FormInput 
                name={"Name of item"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={1}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"Price"} 
                validator={priceValidator} 
                type={"text"}
                numOfField={2}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"Currency"} 
                validator={currencyValidator} 
                type={"text"}
                numOfField={9}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormSelect
             optionsValues={categories}
             validator={categoryValidator}
             name={"Categories"}
             numOfField={11}
             setValidationObject={setValidationObject}
             validationObject={validationObject}
            />
            <FormInput 
                name={"Images"}
                additionalClasses={"images"}
                validator={imageValidator} 
                type={"file"}
                numOfField={8}
                multiple
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"Condition of item"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={4}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"Country"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={10} 
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"State"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={7} 
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"City"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={6}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormInput 
                name={"Adress"} 
                validator={nameValidator} 
                type={"text"}
                numOfField={5}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <FormEditor
                name={"Description"}
                numOfField={3}
                setValidationObject={setValidationObject}
                validationObject={validationObject}
            />
            <Button onClick={submit} disabled={disableButton} color={"dark"}>Submit</Button>
        </div>
    )
}

export default withRouter(NewItemForm);