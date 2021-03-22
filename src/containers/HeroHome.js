import React from 'react';
import { Grid, Segment, Header, Container, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import '../translations/i18n';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../adapters/updateAction';

function HeroHome() {
  const { t } = useTranslation();

  const { state } = useStateMachine(updateAction);

  const history = useHistory();

  const RouteChangeMoreInfo = () => {
    let path = `details-activities2`;
    history.push(path);
  };

  return (
    <Segment size="large" padded="very" className="heroHome">
      <Grid>
        <Grid.Row style={{ paddingTop: '30px', paddingBottom: '0' }}>
          <Grid.Column width={16}>
            <Header as="h1" className="textWhite home-hero-title">
              {t('welcome')}
              {state.yourDetails.firstName + '!'}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column mobile={16} tablet={12} computer={8} floated="left">
          <Container
            fluid
            text
            style={{ paddingTop: '0px', paddingBottom: '20px' }}
          >
            <p className="textWhite home-hero-text">{t('profile')}</p>
          </Container>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={5} floated="right">
          {/* <Icon name="arrow alternate circle right" size='big' fitted /> */}
          <Button
            className="btn btn-primary-volunteer"
            onClick={() => RouteChangeMoreInfo()}
          >
            {t('preferences')}
          </Button>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default HeroHome;
