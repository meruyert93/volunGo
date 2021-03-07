import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import ItemProject from "../containers/ItemProject";
import dataProjects from "../data/dataProjects";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' className="backgroundProject">
            <Header as="h2" className="headingText">
                    {t('recommended')}
            </Header>
            <Grid centered>
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
