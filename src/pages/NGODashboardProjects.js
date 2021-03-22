import React, { useState, useEffect } from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import NGOEmptyDashboard from "../components/NGO/NGOEmptyDashboard";
import  { getAllMyProjects } from "../adapters/projectAPI";
import NGOProjects from "../components/NGO/NGOProjects";

function NGODashboardProjects() {
    const [projects, setProjects] = useState([]);

    
    // const projectsFromAPI = async () => {
    //     const allProjects = await getAllProjects();
    //     console.log(allProjects.data.doc);
    //     // setProjects(allProjects.data.doc)
    // } 

    // const getMeFromAPI = async () => {
    //     const getNGOProjects = await getMe();
    //     console.log(getNGOProjects);
    // }

    const getAllMyProjectsFromAPI = async () => {
        const getNGOProjects = await getAllMyProjects();
        //console.log(getNGOProjects.data.doc.projects);
        if (getNGOProjects['data']['doc']['projects']) {
            setProjects(getNGOProjects.data.doc.projects);
        } else {
            return console.log('not available')
            //to handle error component
            //return component with error
        }
        
    }

    useEffect(() => {
        // projectsFromAPI();
        getAllMyProjectsFromAPI();
        // setProjects(projectsFromAPI)
        // return () => {
        //     cleanup
        // }
    }, [])


  const history = useHistory();

  const RouteChangeNext = () => {
    let path = `ngo-project-registration`;
    history.push(path);
    //console.log(data)
  };

    const RouteChangeNext = () => {
        let path = `ngo-project-registration`;
        history.push(path);
        //console.log(data)
    }

    let projectComponents;
    if (projects.length === 0) {
        projectComponents = <NGOEmptyDashboard/>
    } else {
       projectComponents = <NGOProjects projects={projects}/>
    }

    return (
        <Segment.Group>
            <Segment basic size='large' padded='very' style={{height: '10%'}}>
                <Grid padded='horizontally'>
                    <Grid.Column floated="left" width={10}>
                        <Header className="NGOtextDark home-section-title">{t('ongoing_upcoming_projects')}</Header>
                    </Grid.Column>
                      <Grid.Column floated="right" width={5}>
            <Button
              className="btn btn-primary-ngo"
              onClick={() => RouteChangeNext()}
            >
              {t('add_new_project')}
            </Button>
          </Grid.Column>
                </Grid>
            </Segment>
            {/* <NGOEmptyDashboard/>
            <NGOProjects dataProjects={dataProjects}/> */}
            {projectComponents}
        </Segment.Group>
    )

}

export default NGODashboardProjects;
