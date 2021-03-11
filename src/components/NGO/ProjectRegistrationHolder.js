import React from 'react'
import ProjectInfoBasic from "../projects/ProjectInfoBasic";

function RegHolder({active}) {
    if (active === 1) {
        return <ProjectInfoBasic/>
    }

    return(
        <div>
        </div>
    )
}

export default RegHolder
