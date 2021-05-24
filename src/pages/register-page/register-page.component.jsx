import "./register-page.styles.scss"
import RegisterFrom from "../../components/register-form/register-form.component"



const RegisterPage = ()=>{

    

    return(
        <div className={"register-page"}>
            <div className={"register-page-titlebox"}>
                <span className={"register-page-titlebox-title"}>
                    Register your profile
                </span>
                <span className={"register-page-titlebox-descriptor"}>
                    Email and Phone will be used on page with your items as a contact info.
                </span>
                <span className={"register-page-titlebox-descriptor"}>
                    Only regstered users will be able to see them.
                </span>
                <span className={"register-page-titlebox-descriptor"}>
                Email will also be used to activate your account and reset your password.
                </span>
            </div>
           <RegisterFrom/>
        </div>
    )
}




export default RegisterPage