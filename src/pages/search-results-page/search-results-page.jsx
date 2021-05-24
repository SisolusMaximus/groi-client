import ViewMultiple from "../../components/view-multiple/view-multiple.component";
import {useParams, useHistory} from "react-router-dom"
import Spinner from "../../components/spinner/spinner.component"
import {api_url} from "../../variables" 
import {handleUpdate} from "../../utils/fetch.js"

import {useState, useEffect} from "react"

import "./search-results-page.styles.scss"



const SearchResultsPage = () =>{

    let {query} = useParams()
    const history = useHistory()

    const [data, setData] = useState(undefined)

    
    useEffect(()=>{
        handleUpdate(query, data, setData, `${api_url}/search:${query}`, history )
    // eslint-disable-next-line       
    },[query])

    return(
       
       <div className={"search-result-page"}>
         {data? <ViewMultiple data={data}/> : <Spinner/>}
        </div>
         
    )
}

export default SearchResultsPage;