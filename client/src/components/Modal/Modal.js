import React, {useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import appOperations from '../../redux/app/appOperations';

import CloseBtn from '../Buttons/CloseButton';
import s from './modal.module.scss';

export default function Modal() {
  const[gallery, setGallery]= useState([])
  const [anchor, setAnchor]= useState(0)
  const item =useSelector(state=>state.app.modalItem)
  console.log( gallery, anchor, gallery.length)

  useEffect(()=>{
    if(item) {  
      setGallery(item.collection); 
      setAnchor(item.collection.indexOf(item.image))}
  }, [item])

  const dispatch= useDispatch()

  const closeModal = useCallback(e=>{
    dispatch(appOperations.setModalItem(null))
  },[dispatch])

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleClick = op =>{
    if(op==="+") {
     anchor===gallery.length-1? setAnchor(0): setAnchor(anchor+1)   
  } if(op==="-"){
    anchor===0? setAnchor(gallery.length-1): setAnchor(anchor-1)  }
}

  const handleClickOpen = e => {
    if (
      e.target.id === 'backdrop' ||
      e.target.nodeName === 'svg' ||
      e.target.nodeName === 'path'
    ) {
      closeModal();
    }
  };

  

  return (
    <div className={s.backdrop} id="backdrop" onClick={handleClickOpen}>
      <div className={s.overlay} onClick={handleClickOpen}>
        <div className={s.close}>
          <CloseBtn  onButtonClick={closeModal}/>
        </div>
        <div className={s.prev} onClick={e=>handleClick("-")}></div>
        <img src={`https://drive.google.com/uc?export=view&id=${gallery[anchor]}`} alt={anchor} className={s.galleryImage}/>
        <div className={s.next} onClick={e=>handleClick("+")}></div>
      </div>
    </div>
  );
}