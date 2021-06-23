import "./item-preview-confirmation.styles.scss"
import {deleteItem} from "./item-preview-confirmation.fetch.js"

import Button from "../button/button.compontent"

import {useHistory} from "react-router-dom"

import { connect } from "react-redux"
import {setCurrentMessage} from "../../redux/message/message.actions.js"


const ItemPreviewConfirmation = ({toggleConfirmation, _id, setCurrentMessage}) =>{

    const history = useHistory();

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append("_id", _id)
        deleteItem(formData, history, "/delete", setCurrentMessage)
    }

    return(
        <div className="item-preview-confirmation">
            <div className="item-preview-confirmation-content">
                <div className="item-preview-confirmation-content-text">
                    Are you sure? 
                </div>
                <div className="item-preview-content-buttons">
                    <Button onClick={handleSubmit} color="dark">Proceed</Button>
                    <Button onClick={toggleConfirmation} color="dark">Cancel</Button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    setCurrentMessage: (message) => dispatch(setCurrentMessage(message))
})
    

export default connect(null, mapDispatchToProps)(ItemPreviewConfirmation)