const eventModel = require("../models/eventModel");
const competitionModel = require("../models/competitionModel");
const clubModel = require("../models/clubProfileModel")
const repository = require("../repository/club");
const googleServise =require("../servises/googleDriveServise")

exports.getContent= async(link)=>{
    try{
        if(link==="events"){
            return await repository.getData(eventModel);
        } else if(link==="competitions"){ 
            return await repository.getData(competitionModel);
        } else if(link==="club"){
            return await repository.getData(clubModel);
        };
    }catch(err){
        console.log(err)
        next(err)
    }
} 

exports.createContent =  async( content)=>{
const {link}= content.body
    try{
        if(link==="event"){
            // declaring function to handle incoming competition data
            const handleCompetitionData=async content =>{
                if( content.body.competitionTitleUk){
                    const {  competitionTitleUk,competitionTitleEn, date}= content.body
                    const { compBackgroudImage, rasesFiles}= content.files
                    const rases = await googleServise.toHandleImage(rasesFiles)
                    const backgroundImage = await googleServise.toHandleImage(compBackgroudImage)
                    const body = {competitionTitleUk,competitionTitleEn, date, backgroundImage, rases}
                    const savedCompetition = await repository.createData(body, competitionModel)
                    return savedCompetition._id
                    }
            }      
            const {titleUa,titleEn, contentUa, contentEn, date}=content.body  
            const {gallery, backgroundImage} = content.files
           
            const eventBackgroundImage = await googleServise.toHandleImage(backgroundImage)
            const eventGallery = await googleServise.toHandleGallery(gallery)
            const competition =await handleCompetitionData(content) //handling competition data if it exist
            const body = {titleUa,titleEn, contentUa, contentEn, date, eventBackgroundImage, eventGallery}
            const competitionIdPusher=(body,competition)=>{
                  if(competition){
                   body.competition = competition
                   return body
                  }else{return body}
            }
             await  repository.createData(competitionIdPusher(body, competition), eventModel) 
        } else if(link==="club"){
            const {nameEn, nameUa, uaDescription, enDescription, isOuner}= content.body
            const {avatar}= content.files
            const profileAvatar =  await googleServise.toHandleImage(avatar)
            const body = {nameEn, nameUa, uaDescription, enDescription, profileAvatar, isOuner}
            if(profileAvatar){  await repository.createData(body, clubModel)}else{return }     
        };
    }catch(err){
        console.log(err)
        next(err)
    }
}

exports.removeContent = async( id, link)=>{
    console.log(id, link)
    try{
        if(link==="events"){
            const events = await repository.getData(eventModel)
            const { eventBackgroundImage ,eventGallery} = events.find(item=> item.id ===id)
            await googleServise.toDeleteFile(eventBackgroundImage)
            await googleServise.toDeleteGallery(eventGallery)
            await repository.removeData(id, eventModel)
        } else if(link==="competitions"){
            const competitions = await repository.getData(competitionModel)
            const { backgroundImage ,rases} = competitions.find(item=> item.id ===id)
            await googleServise.toDeleteFile(backgroundImage)
            await googleServise.toDeleteFile(rases)
            await repository.removeData(id, competitionModel)
        } else if(link==="club"){
            const club = await repository.getData(clubModel)
            const {profileAvatar} = club.find(item=> item.id ===id)
            await googleServise.toDeleteFile(profileAvatar)
            await repository.removeData(id, clubModel)
        };
    }catch(err){
        console.log(err)
        next(err)
    }
}

exports.updateContent = async (id, link, content)=>{
    try{
        if(link==="events"){
          return  await repository.updateData(id, eventModel, content)
           
        } else if(link==="competitions"){
           return await repository.updateData(id, competitionModel, content)
         
        } else if(link==="club"){
           return  await repository.updateData(id, clubProfileModel, content)
        };
    }catch(err){
        console.log(err)
        next(err)
    }
}