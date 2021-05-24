import "./sign-in.styles.scss"
import SigninForm from "../../components/signin-form/signin-form.component"



const SigninPage = ()=>{

    

    return(
        <div className={"signin-page"}>
            <div className={"signin-page-titlebox"}>
                <span className={"signin-page-titlebox-title"}>
                    Sign in
                </span>
            </div>
            <SigninForm/>
        </div>
    )
}




export default SigninPage