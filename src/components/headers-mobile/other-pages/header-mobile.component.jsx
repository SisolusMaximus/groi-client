import './header-mobile.styles.scss'

import Icon from "../../../assets/hamburger_white.png"

import {useState} from "react"


import HeaderMenu from "../header-menu/header-menu.component"
import HeaderLogo from "../../header-logo/header-logo.component"
import Searchbar from "../../header-searchbar/header-searchbar.component"

import HeaderCategoriesDropdown from "../../header-categories-dropdown/header-categories-dropdown.component"


const HeaderMobile = ({additionalCssCLasses})=>{

    const [hideMenu, setHideMenu] = useState(true)
    const toggleMenu = () =>{
        setHideMenu(!hideMenu)
    }

    const closeMenu = () =>{
        setHideMenu(true)
    }

    const [hideCategories, setHideCategories] = useState(true)

    const toggleCategories = () =>{
        setHideCategories(!hideCategories)
    }

    const closeCategories = () =>{
        setHideCategories(true)
    }


    return (
        <div className={`header-mobile ${additionalCssCLasses}`}>
            <HeaderLogo/>
            <Searchbar/>
            <button className={"header-mobile-menutoggler"} onClick={()=>{closeCategories(); toggleMenu()} }>
                <img height={"60px"} width={"60px"}  src={Icon} alt="Toggle menu"/>
            </button>
            {hideMenu?  null:<HeaderMenu  toggleMenu={toggleMenu} toggleCategories={toggleCategories}/> }
            {hideCategories? "":
                <HeaderCategoriesDropdown
                  mobile={true}
                  additionalCssClasses={"mobile"}
                  hidden={hideCategories}
                  closeCategories={closeCategories}
                  hideMenu={hideMenu}
                  closeMenu={closeMenu}
                  toggleMenu={toggleMenu}
                />
            }
        </div>
    )
}


export default HeaderMobile;