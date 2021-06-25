import {api_url} from "../../variables"

export const ProfileItemsDataFetch = (id, setData) =>{
    fetch(
        `${api_url}/filter/seller/${id}`,
        {
            method: 'GET',
        }
    )
    .then((response) => response.json())
    .then((result) => {
        setData(result.data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}