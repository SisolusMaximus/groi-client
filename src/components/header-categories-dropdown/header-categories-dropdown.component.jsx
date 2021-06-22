import "./header-categories-dropdown.styles.scss"
import HeaderOption from "../header-option/header-option.component"
import { withRouter } from "react-router-dom"
import {categories} from "../../variables"

const HeaderCategoriesDropdown = ({
      mobile,
      history,
      toggleCategories,
      toggleMenu,
      closeCategories,
      closeMenu,
       additionalCssClasses
    }) =>{

    const handleFilter = (query) => {
        if (toggleCategories){
            toggleCategories()
        }

        if (closeCategories && closeMenu){
            closeCategories();
            closeMenu();
        }
        history.push(`/filter/category/${query}`)
    }

    return (
        <div className={`header-categories-dropdown ${additionalCssClasses}`}>
            {mobile?  
                <HeaderOption onClick={()=>{toggleMenu(); closeCategories();}}>&larr;</HeaderOption>
            :
                ""
            }
            {categories.map( (entry)=> (<HeaderOption key={entry} onClick={() => {handleFilter(entry)}}>{entry}</HeaderOption>))}
        </div>
    )
}
export default withRouter(HeaderCategoriesDropdown );