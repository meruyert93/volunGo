import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Image,
  Divider,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';
import { useHistory } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../adapters/updateAction';

function SignUpFinish() {
  const { t } = useTranslation();

  const { state } = useStateMachine(updateAction);

  const history = useHistory();

  const RouteChangeHome = () => {
    let path = `home`;
    history.push(path);
    console.log(JSON.stringify(state, null, 2));
  };

  const RouteChangeMoreInfo = () => {
    let path = `details-activities2`;
    history.push(path);
  };

  return (
    <Segment size="large" padded="very" className="height100">
      <Grid stackable columns={1} verticalAlign="middle" centered>
        <Header as="h2" className="headingText form-title">
          {t('congratulation')}
        </Header>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={6} textAlign="center">
            <Header as="h5" color="grey" className="form-subtitle">
              {t('welcome_to_community')}
            </Header>
            <Image
              src="./images/signup-completion.png"
              fluid
              style={{ marginBottom: '30px' }}
            />
            {/* <Header as='h3'>
                        {t('personalize')}
                        </Header> */}
            <Button
              className="btn btn-longtext btn-primary-volunteer"
              fluid
              onClick={() => {
                RouteChangeMoreInfo();
              }}
            >
              {t('continue')}
            </Button>
            <Divider hidden style={{ margin: '0' }} />
            <Button
              fluid
              className="btn btn-secondary btn-secondary-volunteer"
              onClick={() => RouteChangeHome()}
            >
              {t('skip_now')}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default SignUpFinish;
