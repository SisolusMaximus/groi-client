import "./header-menu.styles.scss"
import HeaderOption from "../../header-option/header-option.component"
import { withRouter } from "react-router-dom"


import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import {selectCurrentUser} from "../../../redux/user/user.selectors"
import {setCurrentUser} from "../../../redux/user/user.actions.js"

const HeaderMenu = ({history, toggleMenu, toggleCategories, user, setCurrentUser}) =>{

    const handleRouteChange = (routeName) => {
        toggleMenu()
        history.replace(routeName)
    }

    const handleSignOut = () =>{
        toggleMenu()
        setCurrentUser(null)
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
    }

    return (
        <div className={"header-menu-mobile"}>
                <HeaderOption onClick={() =>handleRouteChange("/all")}>VIEW ALL</HeaderOption>
                <HeaderOption onClick={ ()=>{toggleMenu(); toggleCategories()}}>VIEW BY CATEGORY</HeaderOption>
                <HeaderOption onClick={() =>handleRouteChange("/new")}>ADD ITEM </HeaderOption>
                {!user?
                    <div>
                        <HeaderOption onClick={() =>{handleRouteChange("/signin")}}>SIGN IN</HeaderOption>
                        <HeaderOption onClick={() =>{handleRouteChange("/register")}}>REGISTER</HeaderOption>
                    </div>
                    :
                    <div>
                        <HeaderOption onClick={()=>{handleSignOut()}} >SIGN OUT</HeaderOption>
                    </div>
                }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderMenu));