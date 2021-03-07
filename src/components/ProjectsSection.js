import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import ItemProject from "../containers/ItemProject";
import dataProjects from "../data/dataProjects";

function ProjectsSection() {
    return (
        <Segment size='large' padded='very'>
            <Grid>
                {dataProjects.map((project) => {
                return (
                    <ItemProject key={project.id} {...project}/>
                )
                })}
            </Grid>
        </Segment>
    )
}

export default ProjectsSection
