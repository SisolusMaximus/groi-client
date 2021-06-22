import "./reset-password-page.styles.scss"

import ResetPasswordForm from "../../components/reset-password-form/reset-password-form.component"

import {connect} from 'react-redux'
import {useHistory, useLocation} from  "react-router-dom"

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../../redux/user/user.selectors.js"

const ResetPasswordPage = ({user}) =>{
    
    const history = useHistory()
    const username = useLocation().state

    if (!user && !username){
        history.replace("/")
    }

    return(
        
        <div className="reset-password-page">
            <div className={"reset-password-page-titlebox"}>
                <span className={"reset-password-page-titlebox-title"}>
                    Reset password
                </span>
                <span className={"reset-password-page-titlebox-descriptor"}>
                    We sent message on email address asigned to your account.
                </span><span className={"reset-password-page-titlebox-descriptor"}>
                    It contains a verification code, use it below to confirm your identity.
                </span>
            </div>
            <ResetPasswordForm/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


export default connect(mapStateToProps)(ResetPasswordPage)
