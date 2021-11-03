import axios from 'axios';

import  {clubActions}   from '.';
import appActions from '../app/appActions';
import eventBodyFormer from '../../utils/eventBodyFormer';
import clubBodyFormer from '../../utils/clubBodyFormer';


const baseURL = 'http://hqua0210238.online-vm.com/club';
console.log(process.env.BASE_URL)

const getContent = link=> async  dispatch =>{ 
         dispatch(clubActions.getContentRequest())
        await axios.get(`${baseURL}/getContent`)
         .then( ({data}) => dispatch(clubActions.getContentSuccess(data)))
         .catch(error=>dispatch(clubActions.getContentError(error)))

}


const addContent = (content) => async dispatch=>{ 

    const fetchContent= async formedBody =>{  
        dispatch(clubActions.addContentRequest());   
         await axios.post(`${baseURL}/createContent`, formedBody)
         .then(({data})=> dispatch(clubActions.addContentSuccess(data))&& dispatch(appActions.setMessage("Успішно завантажено")))
         .catch(error=>dispatch(clubActions.addContentError(error))&& dispatch(appActions.setMessage("Данні не завантажено"))) 
    }

    if(content.link==="event"){
        const event = eventBodyFormer(content)
       fetchContent(event)
    }
    else{ 
        const club = clubBodyFormer(content)
        fetchContent(club)
   }}

const deleteContent = (id, link) =>async dispatch=>{ 
    dispatch(clubActions.deleteContentRequest())
    await axios.delete(`${baseURL}/removeContent/?id=${id}&link=${link}`)
    .then(({data})=> dispatch(clubActions.deleteContentSuccess(data))&&dispatch(appActions.setMessage("Успішно видалено")))
    .catch(error=> dispatch(clubActions.deleteContentError(error))&&dispatch(appActions.setMessage("Дані не видалено")))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getContent,
    addContent,
    deleteContent,
}