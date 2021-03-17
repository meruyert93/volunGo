import React from 'react';
import { Segment } from 'semantic-ui-react';
import VolProjectDetailUpperPart from "../Volunteers/Components/VolProjectDetailUpperPart";
import dataProject from "../../data/dataProjects";

function VolunteersProjectDetails() {
    const el = dataProject[0];
    return (
        <Segment.Group>
            <VolProjectDetailUpperPart {...el}/>
        </Segment.Group>
    )
}

export default VolunteersProjectDetails
