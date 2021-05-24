import "./signin-form.styles.scss"


import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"


import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../../redux/user/user.selectors.js"
import {setCurrentUser} from "../../redux/user/user.actions"
import {setCurrentMessage} from "../../redux/message/message.actions.js"

import Button from "../button/button.compontent"




import {api_url} from "../../variables"

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

    

    const failureResponseObject = {
        data: [],
        error:{
            message: ""
        }
    }

    const submit = () =>{
        const formData = new FormData();
        formData.append("username", state.username)
        formData.append("password", state.password)
        fetch(
			`${api_url}/signin`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((res) => {
                const {result} = res
                if (result.success === true){
                    console.log("Success: ", result)
                    window.localStorage.setItem("token", result.token)
                    window.localStorage.setItem("userId", result.data.userId)
                    setTimeout(()=>{setCurrentUser(result.data)},0)
                    setCurrentMessage(null)
                    history.replace("/")
                }else if (result.msg){
                    setCurrentMessage(result.msg)
                } else if (result.err){
                    console.log("fucked up ", result)
                    failureResponseObject.error = result.err
                    history.replace("/failure" , {res: failureResponseObject})
                }
			})
			.catch((error) => {
				console.error('Error:', error);
                failureResponseObject.error = error
                history.replace("/failure" , {res: failureResponseObject})
			});
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