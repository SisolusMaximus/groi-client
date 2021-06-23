import "./homepage.styles.scss"

import {withRouter} from "react-router-dom"

import Button from '../../components/button/button.compontent'

const Homepage = ({history}) =>{


    return(
        <div className={"homepage"}>
            <div className="homepage-content">
                <p className="homepage-content-lorem">
                Welcome to GROI!
                </p>
                <p className="homepage-content-lorem">
                It's a site with local announcements where you can search for items that interest you and easily contact with the seller. Also you can post your own offers for free.   
                </p>
                <p className="homepage-content-lorem">
                This is a student project. Please, don't take offers posted on this site seriously :)
                </p>
                <Button onClick={()=> {history.push("/all")}} color={"white"}>Start Exploring</Button>
            </div>
        </div>
    )
}

export default withRouter(Homepage);