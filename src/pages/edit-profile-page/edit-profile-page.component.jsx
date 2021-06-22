import "./edit-profile-page.styles.scss"

import EditProfileForm from "../../components/edit-profile-form/edit-profile-form.component"

import {connect} from 'react-redux'
import {useHistory} from  "react-router-dom"

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "../../redux/user/user.selectors.js"

const EditProfilePage = ({user}) =>{

    const history = useHistory()

    if (!user){
        history.replace("/")
    }

    return(
        
        <div className="edit-profile-page">
            <div className={"edit-profile-page-titlebox"}>
                <span className={"edit-profile-page-titlebox-title"}>
                    Edit your profile
                </span>
                {user? <EditProfileForm/>: ""}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


export default connect(mapStateToProps)(EditProfilePage)