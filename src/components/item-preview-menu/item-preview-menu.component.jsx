import './item-preview-menu.styles.scss'
import {useHistory} from "react-router-dom"

const ItemPreviewMenu = ({toggleMenu, toggleConfirmation}) =>{

    const history = useHistory()

    const handleClick = () =>{
        toggleMenu()
        toggleConfirmation()
    }
    
    return (
        <div className="item-preview-menu">
            <span onClick={() =>handleClick()} className={'item-preview-menu-option'}>Delete item</span>
        </div>
    )
}

export default ItemPreviewMenu