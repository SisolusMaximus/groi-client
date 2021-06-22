import {api_url} from "../../variables"


const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const newItemFetch = (formData, history) =>{
    fetch(
        `${api_url}/new`,
        {
            method: 'POST',
            headers: {
                "Authorization": window.localStorage.getItem("token")
            },
            body: formData,
        }
    )
    .then((response) => response.json())
    .then((result) => {
        history.replace(`/${result.data._id}`)
    })
    .catch((error) => {
        console.error('Error:', error);
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    });
}