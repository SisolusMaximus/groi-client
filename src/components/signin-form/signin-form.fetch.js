
import {api_url} from "../../variables"

const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}


export const signinFetch = (formData, history, setCurrentUser, setCurrentMessage ) =>{
        fetch(
            `${api_url}/signin`,
            {
                method: 'POST',
                body: formData,
            }
        )
        .then((response) => response.json())
        .then((res) => {
            const {result} = res
            if (result.success === true){
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
                        console.log(res)
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
            }else if (result.msg){
                setCurrentMessage(result.msg)
            } else if (result.err){
                failureResponseObject.error = result.err
                history.replace("/failure" , {res: failureResponseObject})
            }
        })
        .catch((error) => {
            failureResponseObject.error = error
            history.replace("/failure" , {res: failureResponseObject})
        });

}