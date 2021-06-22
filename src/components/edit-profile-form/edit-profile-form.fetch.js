import {api_url} from "../../variables"


const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const editProfileFetch = (formData, history, setCurrentUser, setCurrentMessage) =>{
    fetch(
        `${api_url}/user/edit`,
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
        console.log(result)
        if(result.success === true){
            setCurrentUser(result.data)
            setCurrentMessage(result.msg)
            history.replace("/profile")
        } else if (result.msg) {
            setCurrentMessage(result.msg)
        }
    })
    .catch((error) => {
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    })
}