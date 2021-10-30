import React from 'react';
import s from './closeModalBtn.module.scss';
const CloseModalBtn = ({ onButtonClick }) => {
  return ( <div onClick={onButtonClick} className={s.closeContainer}>
    <div className={s.leftright}></div>
    <div className={s.rightleft}></div>

  </div>)
};

export default CloseModalBtn;