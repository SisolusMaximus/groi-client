import {api_url} from "../../../variables"

const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}
export const signoutFetch = (history, setCurrentUser) =>{
    fetch(`${api_url}/signout`, {
        method: "post",
        headers: {
            "Authorization": window.localStorage.getItem("token")
        }
    })
    .then(res => {
        setCurrentUser(null)
        window.localStorage.removeItem("token")
    })
    .catch((error) => {
        console.error('Error:', error);
        failureResponseObject.error = error
        history.replace("/failure" , {res: failureResponseObject})
    });
}