import "./item-preview.styles.scss"

import ImageCarousel from "../image-carousel/image-carousel.component"
import ItemPreviewMenu from "../item-preview-menu/item-preview-menu.component"
import ItemPreviewConfirmation from "../item-preview-confirmation/item-preview-confirmation.component"
import Mapbox from "../mapbox/mapbox.component"

import { ReactComponent as MenuIcon} from '../../assets/ellipsis.svg';
import {useState, useEffect} from "react"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {selectCurrentUser} from "../../redux/user/user.selectors"

const ItemPreview = ({data, user}) =>{

    const [menuHidden, setMenuHidden] = useState(true)
    const [confirmationHidden, setConfirmationHidden] = useState(true)


    const toggleMenu = () =>{
        setMenuHidden(!menuHidden)
    }
    const toggleConfirmation = ()=>{
        setConfirmationHidden(!confirmationHidden)
    }

   return (
        <div className={"item-preview"}>
        {
            user? user._id ===data.seller._id? <div className={"item-preview-icon"} onClick={toggleMenu}>
            <MenuIcon/>
        </div>
        : "" :""
        }
        
        {menuHidden ? "":<ItemPreviewMenu toggleMenu={toggleMenu} toggleConfirmation={toggleConfirmation}/>}
        {confirmationHidden? "":<ItemPreviewConfirmation _id={data._id} toggleConfirmation={toggleConfirmation}/>}
            <div className={"item-preview-title"}>
                {data.name}
                <div className={"item-preview-subtitle"}>
                    Category: {data.category}
                </div>
            </div>
            <ImageCarousel images= {data.images}/>
            <div className={"item-preview-details"}>
                <div className={"item-previev-details-section"}>
                    <div className={"item-preview-details-price"}>
                        Price: {data.price} {data.currency}
                    </div>
                    <div className={"item-preview-details-condition"}>
                        Condition: {data.condition}
                    </div>
                    <div className={"item-preview-details-contact"}>
                        Contact with seller:
                        {user?
                            <>
                                <div className={"item-preview-details-contactinfo"}>Phone: {data.seller.phone}</div>
                                <div className={"item-preview-details-contactinfo"}>Email: {data.seller.email}</div>
                            </>:
                            <div className={"item-preview-details-contactinfo"}>
                                You have to be signed in to see this
                            </div>
                         }
                    </div>
                </div>
                <div className={"item-preview-details-description"}>
                    <div className={"item-preview-details-location"}>
                        <div className={"item-preview-details-location-text"}>
                            <p>Location:</p>
                            <div className={"item-preview-details-location-text-data"}>
                                <p>{data.adress}</p>
                                <p>{data.city}</p>
                                <p>{data.state}</p>
                                <p>{data.country}</p>
                            </div>
                        </div>
                        <Mapbox coordinates={data.geometry.coordinates}/>        
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.description}}
                    className={"item-preview-description"}>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})


export default connect(mapStateToProps)(ItemPreview)