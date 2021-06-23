import "./view-all.styles.scss"

import {useState, useEffect} from "react"

import ViewMultiple from "../../components/view-multiple/view-multiple.component"
import Spinner from "../../components/spinner/spinner.component"
import {api_url} from "../../variables"
import {useHistory} from "react-router-dom"

const ViewAllPage = () =>{

	const history = useHistory()
	const failureResponseObject = {
		data: [],
		error:{
			message: ""
		}
	}

    const [data, setData] = useState(undefined)

    useEffect(() =>{
		if (!data){
				fetch(
					`${api_url}/all`,
					{
						method: 'GET',
					}
				)
				.then((response) => response.json())
				.then((result) => {
					if (result.error){
						failureResponseObject.error = result.error
						history.replace("/failure" , {res: failureResponseObject})
					if (result.data.length === 0)
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
			}})
    
    return (
        <div className="view-all-page">
            {data ? <ViewMultiple data={data}/>: <Spinner/>}
        </div>
    )
}

export default ViewAllPage;