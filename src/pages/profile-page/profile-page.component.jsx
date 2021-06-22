import "./profile-page.styles.scss"
import { ReactComponent as MenuIcon} from '../../assets/ellipsis.svg';


import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setCurrentMessage} from "../../redux/message/message.actions.js"
import {selectCurrentUser} from "../../redux/user/user.selectors.js"

import {ProfileItemsDataFetch} from "./profile-page.fetch"
import ViewMultipleEntry from "../../components/view-multiple-entry/view-multiple-entry.component"
import ProfilePageMenu from "../../components/profile-page-menu/profile-page-menu.component"

const ProfilePage = ({user, setCurrentMessage})=>{

    const history = useHistory()
    const [data, setData] = useState([])
    const [isDataFetched, setIsDataFetched] = useState(false)
    const [menuHidden, setMenuHidden] = useState(true)

    const handleDataFetch = () =>{
        if (user && !isDataFetched){
            ProfileItemsDataFetch(user._id, setData)
            setIsDataFetched(true)
        }
    }

    handleDataFetch()

    const handleNotSignedinRedirect = ()=>{
        history.replace("/")
    }
    if(!user){
        handleNotSignedinRedirect()
    }

    useEffect(() => {
        if(!user){
            handleNotSignedinRedirect()
        }
    })

    const toggleMenu = () =>{
        setMenuHidden(!menuHidden)
    }

    return(
        user?
        <div className="profile-page">
            <div className="profile-page-content">
                <div>{menuHidden? "" :<ProfilePageMenu toggleMenu={toggleMenu}/>}</div>
                <div className="profile-page-content-header">
                    <div>Profile</div>
                    <div 
                      onClick={toggleMenu} 
                      className="profile-page-content-header-icon"
                    >
                        <MenuIcon/>
                    </div>
                </div>
                <div className="profile-page-content-entry">
                    Username: {user.username}
                </div>
                <div className="profile-page-content-entry">
                    Email: {user.email}
                </div>
                <div className="profile-page-content-entry">
                    Phone: {user.phone}
                </div>
                <div className="profile-page-content-items">
                    <div className="profile-page-content-items-title">
                        Your items that are currently on sell
                    </div>
                    {data.map(
                        entry =>
                        <ViewMultipleEntry key={entry._id} entry={entry} />
                    )}
                </div>
            </div>
        </div>
        :
        <div className="profile-page"></div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)