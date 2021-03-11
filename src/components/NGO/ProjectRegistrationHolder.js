import React from 'react'
import ProjectInfoBasic from "../projects/ProjectInfoBasic";

function RegHolder({active}) {
    if (active === 1) {
        return <ProjectInfoBasic/>
    } else {
        return(
            <div>
            <h1>I am returned!</h1>
            </div>
        )
    }

    
}

export default RegHolder
