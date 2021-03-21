import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import ItemProjectForUsers from "../containers/ItemProjectForUsers";
import dataProjects from "../data/dataProjects";
import { useTranslation } from "react-i18next";
import VolunteerYourProjects from '../components/Volunteers/VolunteerYourProjects';
import { useHistory } from "react-router-dom";

function ProjectsSection() {
    const { t } = useTranslation();

    const history = useHistory();

    const displayDetailedProject = (id) => {
        // const chosenProject = dataProjects.find((project) => project.id === id);
        // setClickedProject(chosenProject);
        // console.log(id);
        // console.log(clickedProject);
        history.push(`/projects/${id}`);
    }
    
    return (
        <>
            <VolunteerYourProjects/>
            <Segment size='large' padded='very' className="backgroundProject">
            <Grid container>
                <Header as="h1" className="headingText">
                    {t('recommended')}
                </Header>
            </Grid>
            <Grid container>
                {dataProjects.map((project) => {
                return (
                    <ItemProjectForUsers key={project.id} {...project} displayDetailedProject={displayDetailedProject}/>
                )
                })}
            </Grid>
            </Segment>
        </>
    )
}

export default ProjectsSection;
