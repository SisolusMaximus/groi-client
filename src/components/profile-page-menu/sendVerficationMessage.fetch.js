import {api_url} from "../../variables"


const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const sendVerificationMessage = (formData, history, url) =>{
    let token = undefined
    if(window.localStorage.getItem("token")){
        token = window.localStorage.getItem("token")
    }
    fetch(
        `${api_url}${url}`,
        {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": token
            }
        }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    })
}