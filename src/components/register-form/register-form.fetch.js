import {api_url} from "../../variables"


const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const registerFetch = (formData, history, setCurrentUser, setCurrentMessage) =>{
    fetch(
        `${api_url}/register`,
        {
            method: 'POST',
            body: formData,
        }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        if(result.success === true){
            window.localStorage.setItem("token", result.token)
            fetch(
                `${api_url}/user`,
                {
                    method: 'POST',
                    headers: {
                        "Authorization": window.localStorage.getItem("token")
                    }
                }
            )
            .then((response) => response.json())
            .then((res) => {
                const {result} = res
                if (result.success === true){
                    history.replace("/")
                    setTimeout(setCurrentUser(result.data),0)
                }
            })
            .catch((error) => {
                failureResponseObject.error = error
                history.replace("/failure" , {res: failureResponseObject})
            });
        } else if (result.msg) {
            setCurrentMessage(result.msg)
        }
    })
    .catch((error) => {
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    });
}