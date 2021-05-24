import "./item-preview.styles.scss"

import ImageCarousel from "../image-carousel/image-carousel.component"
import Mapbox from "../mapbox/mapbox.component"

const ItemPreview = ({data}) =>{

   return (
        <div className={"item-preview"}>
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

export default ItemPreview