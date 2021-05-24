import "./show-page.styles.scss"

import {useParams, useHistory} from "react-router-dom"
import {useState, useEffect} from "react"

import {api_url} from "../../variables" 
import {handleUpdate} from "../../utils/fetch.js"

import ItemPreview from "../../components/item-preview/item-preview.component"
import Spinner from "../../components/spinner/spinner.component"



const ShowPage = ( )=>{

    const history = useHistory();
    let {id} = useParams()
    const [data, setData] = useState(undefined)

    useEffect(()=>{
        handleUpdate(id, data, setData, `${api_url}/show${id}`, history)
    // eslint-disable-next-line       
    },[id])

    return(
        <div className={"show-page"}>
            {data? <ItemPreview data={data}/>: <Spinner/>}
        </div>
    )
}


export default ShowPage