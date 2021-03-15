import React from 'react'
import ProjectInfoBasic from "../projects/ProjectInfoBasic";
import ProjectLocation from "../projects/ProjectLocation";
import ProjectRequirements from "../projects/ProjectRequirements";
import ProjectImgDescription from "../projects/ProjectImgDescription";
import NGOVolunteers from "../NGO/NGOVolunteers";

function RegHolder({active, activPicker}) {
    if (active === 1) {
        return <ProjectInfoBasic activPicker={activPicker} />
    } 
    if (active === 2) {
        return <ProjectLocation activPicker={activPicker}/>
    }
    if (active === 3) {
        return <ProjectRequirements activPicker={activPicker}/>
    }
    if (active === 4) {
        return <ProjectImgDescription activPicker={activPicker}/>
    }
    if (active === 5) {
        return <NGOVolunteers activPicker={activPicker}/>
    }
    else {
        return(
            <div>
            <h1>I am returned!</h1>
            </div>
        )
    }

    
}

export default RegHolder
