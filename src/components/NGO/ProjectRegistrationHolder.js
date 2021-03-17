import React from 'react'
import ProjectInfoBasic from "../projects/ProjectInfoBasic";
import ProjectLocation from "../projects/ProjectLocation";
import ProjectRequirements from "../projects/ProjectRequirements";
import ProjectImgDescription from "../projects/ProjectImgDescription";
import NGOVolunteers from "../NGO/NGOVolunteers";
import ProjectCreateLoading from "../projects/ProlectCreateLoading";
import ProjectVolunteersLoading from "../projects/ProjectVolunteersLoading";

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
    if (active === 6) {
        return <ProjectCreateLoading/>
    }
    if (active === 7) {
        return <ProjectVolunteersLoading/>
    }
    else {
        return(
            <ProjectInfoBasic activPicker={activPicker} />
        )
    }

    
}

export default RegHolder
