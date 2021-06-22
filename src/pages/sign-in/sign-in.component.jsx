import "./sign-in.styles.scss"
import SigninForm from "../../components/signin-form/signin-form.component"

import {useHistory} from "react-router-dom"

const SigninPage = ()=>{

    const history = useHistory()

    const handleForgotPaswordRedirect = () =>{
        history.replace("/profile/forgotPassword")
    }

    return(
        <div className={"signin-page"}>
            <div className={"signin-page-titlebox"}>
                <span className={"signin-page-titlebox-title"}>
                    Sign in
                </span>
            </div>
            <SigninForm/>
            <div onClick={handleForgotPaswordRedirect} className={"signin-page-forgot"}> Forgot password?</div>
        </div>
    )
}




export default SigninPage