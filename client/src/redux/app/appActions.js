import { createAction} from '@reduxjs/toolkit';

const toggleLanguage = createAction('LANGUAGE/toggleLanguage');
const setModalItem = createAction('MODAL/setModalItem')
const setMessage = createAction('MESSAGE/setMessage')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toggleLanguage,  
    setModalItem,
    setMessage
}