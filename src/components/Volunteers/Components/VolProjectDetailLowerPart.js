import React, { useState, useEffect } from 'react';
import { Segment, Grid, Header, Icon, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import dataProjects from '../../../data/dataProjects';
import updateYourProjects from '../../../adapters/updateYourProjects';
import { useStateMachine } from 'little-state-machine';

let arrYourProjects = [];
function VolProjectDetailLowerPart({ el }) {
  const {
    id,
    name,
    organization,
    duration,
    days,
    time,
    place,
    volunteers,
    skills,
    contact_person,
    contact_email,
  } = el;
  const { state, actions } = useStateMachine({ updateYourProjects });
  const { t } = useTranslation();
  const history = useHistory();

  const backHome = () => {
    const path = `/projects`;
    history.push(path);
  };

  const joinProject = (id) => {
    const chosenProject = dataProjects.find((project) => project.id === id);
    if (arrYourProjects.includes(chosenProject)) {
      arrYourProjects = arrYourProjects.filter((el) => el !== chosenProject);
    } else {
      arrYourProjects.push(chosenProject);
    }
    actions.updateYourProjects(arrYourProjects);
    Object.assign(state.yourProjects.projects, arrYourProjects);
    //console.log(state.yourProjects.projects)
    history.push(`/projects/${id}/notify`);
  };

  return (
    <Segment basic size="large">
      <Grid container centered stretched>
        <Grid.Row columns="equal">
          <Grid.Column textAlign="center" mobile={16} tablet={4} computer={4}>
            <Segment className="projectDetail-info">
              <Icon
                name="calendar alternate outline"
                size="large"
                className="projectDetail-info__icon"
              />
              <Header as="h3" className="projectDetail-info__title">
                {t('date')}
              </Header>
              <p className="projectDetail-info__text">{duration}</p>
              <p className="projectDetail-info__text">{days}</p>
              <p className="projectDetail-info__text">{time}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign="center" mobile={16} tablet={4} computer={4}>
            <Segment className="projectDetail-info">
              <Icon
                name="map marker alternate"
                size="large"
                className="projectDetail-info__icon"
              />
              <Header as="h3" className="projectDetail-info__title">
                {t('project_location')}
              </Header>
              <p className="projectDetail-info__text">{place}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign="center" mobile={16} tablet={4} computer={4}>
            <Segment className="projectDetail-info">
              <Icon
                name="user outline"
                size="large"
                className="projectDetail-info__icon"
              />
              <Header as="h3" className="projectDetail-info__title">
                {t('number_of_vol')}
              </Header>
              <p className="projectDetail-info__text">{volunteers}</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" mobile={16} tablet={6} computer={6}>
            <Segment className="projectDetail-info">
              <Icon
                name="diamond"
                size="large"
                className="projectDetail-info__icon"
              />
              <Header className="projectDetail-info__title">
                {t('skill_requirements_vol')}
              </Header>
              <p className="projectDetail-info__text">{skills}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign="center" mobile={16} tablet={6} computer={6}>
            <Segment className="projectDetail-info">
              <Icon
                name="phone"
                size="large"
                className="projectDetail-info__icon"
              />
              <Header className="projectDetail-info__title">
                {t('contact_info_vol')}
              </Header>
              <p className="projectDetail-info__text">{contact_person}</p>
              <p className="projectDetail-info__text">
                <a
                  href={`mailto:${contact_email}`}
                  className="projectDetail-info__link"
                >
                  {contact_email}
                </a>
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ margin: '40px 0 60px 0' }}>
          <Grid.Column mobile={14} tablet={14} computer={4}>
            <Button
              className="btn btn-secondary btn-secondary-volunteer"
              onClick={() => backHome()}
            >
              {t('back_home_btn')}
            </Button>
          </Grid.Column>
          <Grid.Column mobile={14} tablet={14} computer={4}>
            <Button
              className="btn btn-primary-volunteer"
              onClick={() => joinProject(id)}
            >
              {t('join_project')}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default VolProjectDetailLowerPart;
