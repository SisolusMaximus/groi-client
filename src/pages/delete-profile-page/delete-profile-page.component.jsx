import './delete-profile-page.styles.scss'
import Button from "../../components/button/button.compontent"
import {deleteProfileFetch} from "./delete-profile-page.fetch.js"

import {setCurrentUser} from "../../redux/user/user.actions"
import {setCurrentMessage} from "../../redux/message/message.actions"
import {connect} from 'react-redux'

import {useState} from "react"
import {useHistory} from "react-router-dom"


const DeleteProfilePage = ({setCurrentMessage, setCurrentUser}) =>{

    const [state, setstate] = useState("")
    const history = useHistory()

    const handleChange = (e) =>{
        setstate(e.target.value)
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append("verificationCode", state)
        deleteProfileFetch(formData, history, setCurrentMessage, setCurrentUser)
        }


    return(
        <div className="delete-profile-page">
            <div className="delete-profile-page-titlebox">
                <div className="delete-profile-page-titlebox-title">
                  Delete your profile
                </div>
                <div className="delete-profile-page-titlebox-descriptor">
                  You are going to remove all of your data and activity on this website.
                </div>
                <div className="delete-profile-page-titlebox-descriptor">
                  This operation is irreversible.
                </div>
                <div className="delete-profile-page-titlebox-descriptor">
                  In order to proceed, you have to vefiry you identity.
                </div>
                <div className="delete-profile-page-titlebox-descriptor">
                  We sent you an email with verification code, use it below to continue.
                </div>
            </div>
            <div className="delete-profile-page-form">
                <div className={"form-input-container"}>
                <label htmlFor="code" className={"form-input-label"}>Verification code: </label>
                <input
                    type="text"
                    id="code"
                    className={`form-input`}
                    name="validation-code"
                    onChange={(e)=> handleChange(e)}
                />
                </div>
            </div>
            <Button onClick={() =>{handleSubmit()}} color={"dark"}>Delete</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})

export default connect(null, mapDispatchToProps)(DeleteProfilePage)
