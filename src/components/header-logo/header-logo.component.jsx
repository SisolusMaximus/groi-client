import "./header-logo.styles.scss"

import {withRouter} from "react-router-dom"

const HeaderLogo = ({history})=>(
    <span onClick={ () => {history.replace("/")}} className={"header-logo"}>
                GROI
            </span>
)

export default withRouter(HeaderLogo);