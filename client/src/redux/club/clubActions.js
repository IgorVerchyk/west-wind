import { createAction } from '@reduxjs/toolkit';

const getContentRequest = createAction('CONTENT/getEventsSend')
const getContentSuccess = createAction('CONTENT/getEventsSuccess' )
const getContentError = createAction('CONTENT/getEventsError')

const addContentRequest = createAction("CONTENT/addContentRequest")
const addContentSuccess = createAction("CONTENT/addContentSuccess" )
const addContentError = createAction("CONTENT/addContentError")

const updateContentRequest = createAction("CONTENT/updateContentRequest")
const updateContentSuccess = createAction("CONTENT/updateContentSuccess" )
const updateContentError = createAction("CONTENT/updateContentError")

const deleteContentRequest = createAction("CONTENT/deleteContentRequest")
const deleteContentSuccess = createAction("CONTENT/deleteContentSuccess" )
const deleteContentError = createAction("CONTENT/deleteContentError")


// eslint-disable-next-line import/no-anonymous-default-export
export default   {
    getContentRequest,
    getContentSuccess,
    getContentError,

    addContentRequest,
    addContentSuccess,
    addContentError,

    updateContentRequest,
    updateContentSuccess,
    updateContentError,

    deleteContentRequest,
    deleteContentSuccess,
    deleteContentError,

}
