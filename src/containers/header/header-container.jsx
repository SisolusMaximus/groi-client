import Header from "../../components/headers/header/header.component"
import HeaderMobile from "../../components/headers-mobile/other-pages/header-mobile.component"

import { useLocation} from 'react-router-dom'


import {useState, useEffect} from "react"




const HeaderContainer = () =>{

    const location = useLocation()
    const [currentPath, setCurrentPath] =  useState(location.pathname)
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = (e) => {
        setwindowWidth(window.innerWidth);
       };


    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])
    
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
    }, [])
    
    useEffect(()=>{
        return window.addEventListener("resize", handleResize);
    }, [])

    if (windowWidth < 1270){
        return(
        <HeaderMobile additionalCssCLasses={ currentPath === "/"? "header-mobile-homepage": ""}/>)}
            else{
        return(
            <Header additionalCssCLasses={ currentPath === "/"? "header-homepage": ""}/>
        )
    }
}

export default HeaderContainer




