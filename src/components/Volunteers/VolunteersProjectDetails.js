import React from 'react';
import { useParams } from "react-router-dom";
import { Segment } from 'semantic-ui-react';
import VolProjectDetailUpperPart from "../Volunteers/Components/VolProjectDetailUpperPart";
import VolProjectDetailLowerPart from "../Volunteers/Components/VolProjectDetailLowerPart";
import dataProjects from "../../data/dataProjects";

// import { withRouter } from "react-router-dom";

function VolunteersProjectDetails() {
    let { id } = useParams();
    console.log(id);
    const el = dataProjects[id-1];
    return (
        <Segment.Group>
            <VolProjectDetailUpperPart el={el}/>
            <VolProjectDetailLowerPart el={el}/>
        </Segment.Group>
    )
}

export default VolunteersProjectDetails;
