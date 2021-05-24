import './header-searchbar.styles.scss'
import { ReactComponent as SearchIcon} from '../../assets/search_icon_152764.svg';
import {useState} from "react"

import {withRouter} from "react-router-dom"
 

const Searchbar = ({history}) =>{

    const [searchfield, setSearchfield] = useState("")

    const handleSearchfieldChange = (e) =>{
        setSearchfield(e.target.value)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            history.push(`/search_results:${searchfield}`)
        }
      }

    return (<div className={"searchbar-container"} >
            <input
              onKeyPress={(e) =>{handleKeyPress(e)}}
              onChange={(e) => handleSearchfieldChange(e)}
              className={"searchbar-input"}
              type={"text"}
              placeholder={"search for item"}
            />
            <button 
                className={"searchbar-button"}
                onClick={() =>{history.push(`/search_results:${searchfield}`)}}
            >
                <SearchIcon className={"searchbar-icon"}/>
            </button>
    </div>)
}

export default withRouter(Searchbar);