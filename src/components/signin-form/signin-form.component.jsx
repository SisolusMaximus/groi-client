import "./signin-form.styles.scss"


import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../../redux/user/user.selectors.js"
import {setCurrentUser} from "../../redux/user/user.actions"
import {setCurrentMessage} from "../../redux/message/message.actions.js"
import {signinFetch} from "./signin-form.fetch.js"

import Button from "../button/button.compontent"


const SigninForm = ({history, user, setCurrentMessage, setCurrentUser}) =>{

    const [state, setstate] = useState({username: "", password: ""})

    const handleChange = (e) =>{
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(user){
            setCurrentMessage("You are signed in already")
            history.replace("/")
        }
    })

    const submit = () =>{
        const formData = new FormData();
        formData.append("username", state.username)
        formData.append("password", state.password)
        signinFetch( formData,history, setCurrentUser, setCurrentMessage)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            submit()
        }
      }

   return(
        <div className={"signin-form"}>
            <div className={"signin-form-input-container"}>
                <label htmlFor={"signin-username"} className={"signin-form-input-label"}>Username: </label>
                    <input
                        type="text"
                        id={"signin-username"}
                        className={`signin-form-input`}
                        name="username"
                        onChange={(e) => {handleChange(e)}}
                        onKeyPress={(e) =>{handleKeyPress(e)}}
                    />
            </div>
            <div className={"signin-form-input-container"}>
                <label htmlFor={"signin-username"} className={"signin-form-input-label"}>Password: </label>
                    <input
                        type="password"
                        id={"signin-password"}
                        className={`signin-form-input`}
                        name="password"
                        onChange={(e) => {handleChange(e)}}
                        onKeyPress={(e) =>{handleKeyPress(e)}}
                    />
            </div>
            <Button onClick={submit} color={"dark"}>Signin</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SigninForm));