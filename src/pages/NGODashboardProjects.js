import React, { useState, useEffect } from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import NGOEmptyDashboard from "../components/NGO/NGOEmptyDashboard";
import  { getAllProjects } from "../adapters/projectAPI";
import NGOProjects from "../components/NGO/NGOProjects";
import dataProjects from "../data/dataProjects";

function NGODashboardProjects() {
    const [projects, setProjects] = useState([]);

    const projectsFromAPI =  getAllProjects();

    useEffect(() => {
        console.log(projectsFromAPI.data)
        
        // setProjects(projectsFromAPI)
        // return () => {
        //     cleanup
        // }
    }, [])

    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeNext = () => {
        let path = `ngo-project-registration`;
        history.push(path);
        //console.log(data)
    }

    let projectComponents;
    if (projects.length === 0) {
        projectComponents = <NGOEmptyDashboard/>
    } else {
       projectComponents = <NGOProjects dataProjects={dataProjects}/>
    }

    return (
        <Segment.Group>
            <Segment basic size='large' padded='very' style={{height: '10%'}}>
                <Grid padded='horizontally'>
                    <Grid.Column floated="left" width={10}>
                        <Header>{t('ongoing_upcoming_projects')}</Header>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button primary onClick={() => RouteChangeNext()}>{t('add_new_project')}</Button>
                    </Grid.Column>
                </Grid>
            </Segment>
            {/* <NGOEmptyDashboard/>
            <NGOProjects dataProjects={dataProjects}/> */}
            {projectComponents}
        </Segment.Group>
    )
}

export default NGODashboardProjects
