import "./image-carousel.styles.scss"

import {useState, useEffect} from "react"


const ImageCarousel = ({images}) =>{

    const [imageIndex, setImageIndex] = useState(0)
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false)
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(false)
    

    useEffect(()=>{
        if(imageIndex>0){
            setPrevButtonDisabled(false)
        } else{
            setPrevButtonDisabled(true)
        }

        if(imageIndex<images.length-1){
            setNextButtonDisabled(false)
        } else{
            setNextButtonDisabled(true)
        }
    }, [imageIndex, images.length])

    const handlePrev = (setImageIndex, imageIndex) =>{
        if (imageIndex > 0){
            setImageIndex(imageIndex-1)
        }
    }

    const handleNext = ( setImageIndex, imageIndex,  imageCount) =>{
        if (imageIndex < imageCount -1 ){
            setImageIndex(imageIndex +1)
        }
    }

    return(
        <div
         className={"image-carousel"}
         style={{backgroundImage: `url(${images[imageIndex].url})`}}
        >
            <button
                onClick={() =>{handlePrev(setImageIndex, imageIndex)}}
                disabled={prevButtonDisabled ? true: false}
                className={"image-carousel-button previous"}>&larr;
            </button>
            <button  
                onClick={() =>{handleNext(setImageIndex, imageIndex, images.length)}}
                disabled={nextButtonDisabled ? true: false}
                className={"image-carousel-button next"}>&rarr;
            </button>
        </div>
    )
}

export default ImageCarousel