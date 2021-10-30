import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import {langContext}  from '../AppLayout';
import appOperations from '../../redux/app/appOperations';
import MenuButton from '../Buttons/MenuButton';

import styles from "./gallery.module.scss"

const Gallery= ({collection}) => {
  const textContent = useContext(langContext)
  const [list, setList]= useState([])
  const [index, setIndex]= useState(8)

  useEffect(()=>{
    setList(collection.slice(0, index))
  },[index, collection])

  const showMoreImages = (index, setIndex)=>{
    setIndex(index+8)
  }

  const dispatch = useDispatch();

  return (
    <div className={styles.galleryContainer}>
        <ul className={styles.galleryCollection}>
          {list.map(image=><li key={image} className={styles.galleryItem}>
            <div className={styles.imageOverlay} onClick={e=>dispatch(appOperations.setModalItem({image:image, collection:collection}))}>
               <img src={`https://drive.google.com/uc?export=view&id=${image}`} alt={image} className={styles.galleryImage}/>
               </div>
            </li>)}
        </ul>
      {(collection.length > 8) &&(collection.length > index)
      &&<MenuButton text={textContent.galleryMoreButton} onClick={e=>showMoreImages(index, setIndex)}/>}
    </div>
  );
}

export default Gallery