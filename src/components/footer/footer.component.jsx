import "./footer.styles.scss"

import { useLocation} from 'react-router-dom'

import {useState, useEffect} from "react"





const Footer = () =>{

    const location = useLocation()
    const [currentPath, setCurrentPath] =  useState(location.pathname)
    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return(
        <div className={ currentPath === "/"? "footer footer-homapage": "footer"}>
            <span className={"footer-content"}>&copy; GROI 2021</span>
        </div>
    )
}

export default Footer;
