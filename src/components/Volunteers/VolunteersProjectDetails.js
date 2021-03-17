import React from 'react';
import { Segment } from 'semantic-ui-react';
import VolProjectDetailUpperPart from "../Volunteers/Components/VolProjectDetailUpperPart";
import VolProjectDetailLowerPart from "../Volunteers/Components/VolProjectDetailLowerPart";
import dataProject from "../../data/dataProjects";

function VolunteersProjectDetails() {
    const el = dataProject[0];
    return (
        <Segment.Group>
            <VolProjectDetailUpperPart {...el}/>
            <VolProjectDetailLowerPart {...el}/>
        </Segment.Group>
    )
}

export default VolunteersProjectDetails
