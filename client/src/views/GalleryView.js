import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"

import Gallery from "../components/Gallery/Gallery"

const GalleryView =()=>{
    const clubSelector = useSelector(state=>state.data.content.events)

    const [collection, setCollection]= useState([])
    useEffect(()=>{
        let arr =[]
        clubSelector.forEach(element => {
           arr.push(...element.eventGallery)
       });
       setCollection(arr)
        }, [clubSelector] );

    return(
        <>
      <Gallery collection={collection}/>
        </>
    )
}

export default GalleryView;