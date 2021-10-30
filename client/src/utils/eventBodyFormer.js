
const eventBodyFormer =content=>{
    const event =  new FormData();
    const {titleUa,titleEn, contentUa, contentEn, date, images, backgroundImage}=content.event   
            event.append('link', content.link)  
            event.append('titleUa', titleUa)
            event.append('titleEn', titleEn)
            event.append('contentUa', contentUa)
            event.append('contentEn', contentEn)
            event.append('date', date)
            for(const file of images){
                event.append('gallery', file, file.name)}
            event.append('backgroundImage', backgroundImage[0])
            if(content.competition){
        const {  competitionTitleUk,competitionTitleEn, compBackgroudImage, rases}= content.competition
        event.append('competitionTitleUk', competitionTitleUk)
        event.append('competitionTitleEn', competitionTitleEn)
        event.append('compBackgroudImage', compBackgroudImage[0])
        event.append('rasesFiles', rases[0])
      
      }     

            return event
}
export default eventBodyFormer;