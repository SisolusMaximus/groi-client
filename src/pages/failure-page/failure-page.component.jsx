import "./failure-page.styles.scss"
import { ReactComponent as FailureIcon} from '../../assets/failure_iconcd.svg';
import {useLocation} from "react-router-dom"

const FailurePage = () => {

    const response = useLocation().state.res

    const message = ["", ""]

    const setMessage = (response) =>{
        if (response.error.message.includes("Failed to fetch")){
            message[0] = "Failed to connect to server."
            message[1] = "Perhaps your internet connection is a problem or servers were blown up"
        } else if (response.data.length === 0 && response.error.message === ""){
            message[0] = "We couldn't find what you are looking for."
            message[1] = "Perhaps there is no item that meets your criteria."
        }  else if (response.error.message.includes("ObjectId")){
            message[0] = "We couldn't find what you are looking for."
            message[1] = "Perhaps there is no item that meets your criteria."
        } else if (response.error){
            message[0] = "Something went wrong."
            message[1] = "Try again later."
        }
        
    } 

    setMessage(response)

    return(
        <div className={"failure-page"}>
            <div className={"failure-page-contentcontainer"}>
                <div className={"failure-page-header"}>
                   <FailureIcon/><span> Whooops!</span>
                </div>
                <div className={"failure-page-errorcontent"}>
                    <p>{message[0]}</p>
                    <p>{message[1]}</p>
                </div>
            </div>
        </div>
    )
};

export default FailurePage;