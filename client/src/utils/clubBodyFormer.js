
const clubBodyFormer= content =>{
    const profile = new FormData()
    const {nameEn, nameUa, avatar, uaDescription, enDescription, isOuner}=content.profile
            profile.append("link", content.link)
            profile.append("nameEn", nameEn)
            profile.append("nameUa", nameUa)
            profile.append("avatar", avatar[0])
            profile.append("uaDescription", uaDescription)
            profile.append("enDescription", enDescription)
            profile.append("isOuner", isOuner)
    return profile
}

export default clubBodyFormer