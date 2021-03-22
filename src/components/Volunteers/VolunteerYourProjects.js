import React, { useState, useEffect } from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import dataProjects from '../../data/dataProjects';
import ItemYourProjects from '../../containers/ItemYourProjects';
import { useStateMachine } from "little-state-machine";
import updateYourProjects from '../../adapters/updateYourProjects';

function VolunteerYourProjects() {
    const [yourProjects, setYourProjects] = useState([])
    const { t } = useTranslation();
    const { state } = useStateMachine({ updateYourProjects });

    useEffect(() => {
        setYourProjects(state.yourProjects.projects)
    }, [state.yourProjects.projects])
    
    let yourProjectComponent;

    if (state.yourProjects.projects.length === 0) {
        yourProjectComponent = 
        <Grid container textAlign='center'>
            <Header textAlign='center' color='grey'>Your did not add projects yet</Header>
        </Grid>
    } else {
        yourProjectComponent = yourProjects.map(project => {
            return(
                <ItemYourProjects key={project.id} {...project}/>
            )
        })
    }

    return (
        <Segment basic size='large' padded='very' className="backgroundProject">
            <Grid container>
                <Header as="h1" className="headingText">
                    {t('your_projects')}
                </Header>
            </Grid>
            <Grid container>
                {yourProjectComponent}
            </Grid>
        </Segment>
    )
}

export default VolunteerYourProjects
