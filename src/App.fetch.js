import {api_url} from "./variables"

export const fetchUserApp = (setCurrentUser, setCurrentMessage) =>{

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
            setCurrentUser(result.data)
            setCurrentMessage(null)
        } else if (result.success === false){
        setCurrentMessage("Session has expired")
        window.localStorage.setItem("token", "")
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}