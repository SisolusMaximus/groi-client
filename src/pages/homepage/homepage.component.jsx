import "./homepage.styles.scss"

import {withRouter} from "react-router-dom"

import Button from '../../components/button/button.compontent'

const Homepage = ({history}) =>{


    return(
        <div className={"homepage"}>
            <div className="homepage-content">
                <p className="homepage-content-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sapien imperdiet ante sodales condimentum. Quisque tincidunt molestie metus quis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque eros, feugiat nec dui sagittis, hendrerit tempor augue. Mauris consectetur nulla a condimentum condimentum. Curabitur vitae hendrerit sem.</p>
                <Button onClick={()=> {history.replace("/all")}} color={"white"}>Start Exploring</Button>
            </div>
        </div>
    )
}

export default withRouter(Homepage);