const { google }= require("googleapis");
const stream = require("stream")
const fs = require("fs")
const KEYFILE = require('../../westwind-326717-7b3ca35105ef.json')

const SCOPES = ['https://www.googleapis.com/auth/drive']

// const googleAuth = new google.auth.GoogleAuth(
//     { keyFile : KEYFILE,
//         scope: SCOPES
//     }
// )


const apiKey = process.env.googleApi;
const CLIENT_ID = process.env.googleClientId;
const SECRET_KEY = process.env.googleSecret;
const REDIRECT_URL=process.env.googleRedirectUrl;
const refreshToken =process.env.googleRefreshToken;
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, SECRET_KEY, REDIRECT_URL)
oauth2Client.setCredentials({refresh_token: refreshToken})

const drive = google.drive({
    version: "v3",
    auth: oauth2Client
})


async function uploadFile (file){
    const bs = new stream.PassThrough();
     const streamedFile =  bs.end(file.data);
try{
const response= await drive.files.create({
    requestBody:{name:file.name,
    mimeType: file.mimetype} ,
    media:{
        mimeType:file.mimetype,
       body: streamedFile
    }
})
return response.data.id
}catch(error){ console.log("uploadError",error)}
}

async function deleteFile(id){
    try {
        await drive.files.delete({
            fileId: id
            
        })
    } catch (error) {
        console.log(error.message)
    }
}

async function createPublicUrl(id){
    console.log("id",id)
    
    try {
         await drive.permissions.create({ 
             fileId: id,
        requestBody:{
            role:'reader',
            type:'anyone'
        }})
        const response = await drive.files.get({
            fileId:id,
            fields:"webViewLink, webContentLink"
        })
        return response
    } catch (error) {
        console.log("createError",error)
    }
}

exports.toHandleImage =async file =>{
   const publicLInk = await uploadFile(file).then(res=> {createPublicUrl(res); return res});
   return publicLInk
}

exports.toHandleGallery = async array =>{
    const gallery = [];
    for( const file of array){
     await toHandleImage(file).then(res=>gallery.push(res)) 
    } 
    return gallery

}

exports.toDeleteGallery= async array =>{
    for( const file of array){
        await deleteFile(file) 
       } 
}

exports.toDeleteFile = async id =>{
    await deleteFile(id)
}