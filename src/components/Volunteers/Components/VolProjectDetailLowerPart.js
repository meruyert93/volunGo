import React, { useState, useEffect } from 'react';
import { Segment, Grid, Header, Icon, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import dataProjects from '../../../data/dataProjects';
import updateYourProjects from '../../../adapters/updateYourProjects';
import { useStateMachine } from "little-state-machine";

let arrYourProjects = [];
function VolProjectDetailLowerPart({el}) {
    const { id, name, organization, duration, days, time, place, volunteers, skills, contact_person, contact_email } = el;
    const { state, actions } = useStateMachine({ updateYourProjects });
    const { t } = useTranslation();
    const history = useHistory();

    const backHome = () => {
        const path = `/projects`
        history.push(path);
    }

    const joinProject = (id) => {
        const chosenProject = dataProjects.find((project) => project.id === id);
        if(arrYourProjects.includes(chosenProject)) {
            arrYourProjects = arrYourProjects.filter(el => el !== chosenProject)
        } else {
            arrYourProjects.push(chosenProject)
        }
        actions.updateYourProjects(arrYourProjects);
        Object.assign(state.yourProjects.projects, arrYourProjects);
        //console.log(state.yourProjects.projects)
        history.push(`/projects/${id}/notify`);
    }

    return (
        <Segment  basic size='large'>
            <Grid container centered stretched>
                <Grid.Row columns='equal'>
                    <Grid.Column textAlign="center" mobile={16} tablet={5} computer={5}>
                        <Segment className='backgroundLightGrey'>
                            <Icon name='calendar alternate outline' size='large'/>
                            <Header as="h3">{t('date')}</Header>
                            <p>{duration}</p>
                            <p>{days}</p>
                            <p>{time}</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center" mobile={16} tablet={5} computer={5}>
                        <Segment className='backgroundLightGrey'>
                            <Icon name='map marker alternate' size='large'/>
                            <Header as='h3'>{t('project_location')}</Header>
                            <p>{place}</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column  textAlign="center" mobile={16} tablet={5} computer={5}>
                        <Segment className='backgroundLightGrey'>
                            <Icon name='user outline' size='large'/>
                            <Header as='h3'>{t('number_of_vol')}</Header>
                            <p>{volunteers}</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center" mobile={16} tablet={5} computer={5}>
                        <Segment className='backgroundLightGrey'>
                            <Icon name='diamond' size='large'/>
                            <Header>{t('skill_requirements_vol')}</Header>
                            <p>{skills}</p>
                        </Segment>                      
                    </Grid.Column>
                    <Grid.Column textAlign="center" mobile={16} tablet={5} computer={5}>
                        <Segment className='backgroundLightGrey'>
                            <Icon name='phone' size='large'/>
                            <Header>{t('contact_info_vol')}</Header>
                            <p>{contact_person}</p>
                            <p>{contact_email}</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={14} tablet={14} computer={3}>
                        <Button basic color="pink" onClick={() => backHome()}>{t('back_home_btn')}</Button>
                    </Grid.Column>
                    <Grid.Column mobile={14} tablet={14} computer={3}>
                        <Button color="pink" onClick={() => joinProject(id)}>{t('join_project')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default VolProjectDetailLowerPart
