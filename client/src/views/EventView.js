import React from "react"

import SingleEventPage from "../components/EventsSection/SingleEventPage"

const EventView =props=>{
    return(
        <SingleEventPage id = {props.location.state.id}/>
    )
}

export default EventView;