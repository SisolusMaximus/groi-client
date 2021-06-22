import {api_url} from "../../variables"


const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const deleteProfileFetch = (formData, history, setCurrentMessage, setCurrentUser) =>{
    fetch(
        `${api_url}/user/deleteProfile`,
        {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        }
    )
    .then((response) => response.json())
    .then((result) => {
        if (result.success === true && result.message.length >0){
            window.localStorage.removeItem("token")
            setCurrentUser(null)
            setCurrentMessage(result.message)
            history.replace("/")
        }
    })
    .catch((error) => {
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    })
}