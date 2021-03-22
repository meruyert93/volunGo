import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import NGOEmptyDashboard from '../components/NGO/NGOEmptyDashboard';

function NGODashboardProjects() {
  const { t } = useTranslation();

  const history = useHistory();

  const RouteChangeNext = () => {
    let path = `ngo-project-registration`;
    history.push(path);
    //console.log(data)
  };

  return (
    <Segment.Group className="height100">
      <Segment basic size="large" padded="very" style={{ height: '10%' }}>
        <Grid padded="horizontally">
          <Grid.Column floated="left" width={10}>
            <Header className="NGOtextDark home-section-title">
              {t('ongoing_upcoming_projects')}
            </Header>
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
      <NGOEmptyDashboard />
    </Segment.Group>
  );
}

export default NGODashboardProjects;
