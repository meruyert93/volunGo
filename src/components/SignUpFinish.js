import React from 'react';

import { Grid, Segment, Header,  Button, Image, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";
import { userSignUp } from "../adapters/userAPI";
import Error from '../pages/Error';

function SignUpFinish() {
  const { t } = useTranslation();

  const { state } = useStateMachine(updateAction);

  const history = useHistory();


    const responseData = async (path) => {
        const response  = await userSignUp(JSON.stringify(state.yourDetails));
        if (response.status ===  'success') {
            const TOKEN = response.token;
            localStorage.setItem('token', TOKEN);
            return history.push(path);
        }
        return history.push('error');
    }

    const RouteChangeHome = () => {
        let path = `home`;
        responseData(path);
    }

    const RouteChangeMoreInfo = () => {
        let path = `details-activities2`;
        responseData(path);
    }
    
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
