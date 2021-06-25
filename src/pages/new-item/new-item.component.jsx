import "./new-item.styles.scss"

import NewItemForm from "../../components/new-item-form/new-item-form.component"

import {useEffect} from "react"
import {withRouter} from "react-router-dom"

import {connect} from "react-redux"
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../../redux/user/user.selectors.js"
import {setCurrentMessage} from "../../redux/message/message.actions.js"

const NewItemPage = ({user, history, setCurrentMessage}) =>{


    const handleRedirect = () =>{
        setCurrentMessage("You have to be signed in to perform this action")
        history.replace("/signin")
    }

    useEffect(() => {
       if(!user) {
            handleRedirect()
        }
    })


    return (
        <div className={"new-item-page"}>
            <div className={"new-item-page-titlebox"}>
                <span className={"new-item-page-titlebox-title"}>
                    Post your offer
                </span>
                <span className={"new-item-page-titlebox-descriptor"}>
                    Use form below to fill information about item that you want to sell.
                </span>
            </div>
           <NewItemForm/>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewItemPage));