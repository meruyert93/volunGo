import React, { useState } from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import ItemProjectForUsers from "../containers/ItemProjectForUsers";
import dataProjects from "../data/dataProjects";
import { useTranslation } from "react-i18next";
import VolunteersProjectDetails from '../components/Volunteers/VolunteersProjectDetails';
import { useHistory } from "react-router-dom";

function ProjectsSection() {
    const [clickedProject, setClickedProject] = useState()
    const { t } = useTranslation();

    const history = useHistory();

    const displayDetailedProject = (id) => {
        const chosenProject = dataProjects.find((project) => project.id === id);
        setClickedProject(chosenProject);
    }
    console.log(clickedProject);

    if (clickedProject) {
        return <VolunteersProjectDetails clickedProject={clickedProject}/>
    }

    //console.log(openedProject)

    return (
        <Segment size='large' padded='very' className="backgroundProject">
            <Header as="h2" className="headingText">
                    {t('recommended')}
            </Header>
            <Grid centered>
                {dataProjects.map((project) => {
                return (
                    <ItemProjectForUsers key={project.id} {...project} displayDetailedProject={displayDetailedProject}/>
                )
                })}
            </Grid>
        </Segment>
    )
}

export default ProjectsSection
