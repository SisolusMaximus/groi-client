import './header.styles.scss'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCurrentUser} from "../../../redux/user/user.selectors"
import {setCurrentUser} from "../../../redux/user/user.actions"

import {useState} from "react"
import {withRouter} from "react-router-dom"

import HeaderOption from '../../header-option/header-option.component'
import HeaderLogo from "../../header-logo/header-logo.component"
import Searchbar from "../../header-searchbar/header-searchbar.component"
import HeaderCategoriesDropdown from "../../header-categories-dropdown/header-categories-dropdown.component"

const Header = ({history, additionalCssCLasses, user, setCurrentUser})=>{

    const [categoriesDropdownHidden,
        setCategoriesDropdownHidden] = useState(true)

    const toogleCategories = () =>{
        setCategoriesDropdownHidden(!categoriesDropdownHidden)
    }

    const handleSignOut = () =>{
        setCurrentUser(null)
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
    }

    return (
        <div className={`header ${additionalCssCLasses}`}>
            <HeaderLogo/>
            <div className={"header-options"}>
                <HeaderOption onClick={() =>{history.replace("/all")}}>VIEW ALL</HeaderOption>
                <HeaderOption onClick={()=> {toogleCategories()}}>VIEW BY CATEGORY</HeaderOption>
                <HeaderOption onClick={() =>{history.replace("/new")}}>ADD ITEM </HeaderOption>
            </div>

            {categoriesDropdownHidden? "":
            <HeaderCategoriesDropdown hidden={categoriesDropdownHidden}
             toggleCategories={toogleCategories}/>}
            <Searchbar/>
            {!user?
            <div className={"user-section"}>
                <HeaderOption onClick={() =>{history.replace("/signin")}}>SIGN IN</HeaderOption>
                <HeaderOption onClick={() =>{history.replace("/register")}}>REGISTER</HeaderOption>
            </div>
            :
            <div className={"user-section"}>
                <HeaderOption onClick={()=>{handleSignOut()}} >SIGN OUT</HeaderOption>
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));