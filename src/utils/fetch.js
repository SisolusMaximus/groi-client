const failureResponseObject = {
    data: [],
    error:{
        message: ""
    }
}

export const handleUpdate = (query, data, setData, url, history) =>{
    setData(undefined)
    if(!data || query){
        fetch(
            `${url}`,
            {
                method: 'GET',
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
            if (result.error){
                failureResponseObject.error.message = result.error
                history.replace("/failure" , {res: failureResponseObject})}
            if (result.data.length === 0){
                console.log(result.data.length)
                history.replace("/failure" , {res: failureResponseObject})
            } else {
                setData(result.data)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            failureResponseObject.error = error
            history.replace("/failure" , {res: failureResponseObject})
        });
    }
}