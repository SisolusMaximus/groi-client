import ViewMultiple from "../../components/view-multiple/view-multiple.component";
import {useParams, useHistory} from "react-router-dom"
import Spinner from "../../components/spinner/spinner.component"
import {api_url} from "../../variables" 
import {handleUpdate} from "../../utils/fetch.js"

import {useState, useEffect} from "react"

import "./filter-page.styles.scss"



const FilterResultsPage = () =>{

    let {typeOfQuery, query} = useParams()
    const [data, setData] = useState(undefined)
    const history = useHistory()

    
    useEffect(()=>{
        handleUpdate(query, data, setData, `${api_url}/filter/${typeOfQuery}/${query}`, history)
    // eslint-disable-next-line       
    },[query])

    return(
       
       <div className={"filter-result-page"}>
         {data? <ViewMultiple data={data}/> : <Spinner/>}
        </div>
         
    )
}

export default FilterResultsPage;