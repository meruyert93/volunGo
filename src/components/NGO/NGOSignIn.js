import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Divider,
  Image,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateNGOAction from '../../adapters/updateNGOAction';
import { ngoSignIn } from '../../adapters/ngoAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;

function NGOSignIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { t } = useTranslation();
  const history = useHistory();
  const { state, actions } = useStateMachine({ updateNGOAction });
  const { handleSubmit, register } = useForm({
    defaultValues: state.ngoDetails,
  });

  const ngoSignInFromApi = async (data) => {
    const responseSignIn = await ngoSignIn(data);
    return responseSignIn;
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
    // console.log('toggling')
  };

  const RouteChangeHome = async (data) => {
    let path = `ngo-projects-dashboard`;
    actions.updateNGOAction(data);
    Object.assign(state.ngoDetails, data);
    const response = await ngoSignInFromApi(JSON.stringify(state.ngoDetails));
    if (response.status === 'success') {
      const TOKEN = response.token;
      localStorage.setItem('token', TOKEN);
      return history.push(path);
    }
    history.push('error');
  };

  const RouteChangeSignUp = () => {
    let path = `ngo-sign-up1`;
    history.push(path);
  };

  return (
    <Segment size="large" padded="very">
      <Grid container style={{ height: '75vh' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={8}
            verticalAlign="middle"
          >
            <Grid>
              <Grid.Column width={16} textAlign="center">
                <Header as="h2" className="NGOtextDark signin-title">
                  {t('sign_in_as_ngo')}
                </Header>
              </Grid.Column>
              <Grid.Column width={16} textAlign="center">
                <Header as="h6" color="grey" className="signin-text">
                  {t('welcome_back_ngo')}
                </Header>
              </Grid.Column>
              <Grid.Row centered>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <Form onSubmit={handleSubmit(RouteChangeHome)}>
                    <Form.Field required>
                      <label>{t('email')}</label>
                      <input
                        type="text"
                        name="email"
                        placeholder={t('email')}
                        ref={register({ required: true })}
                      />
                    </Form.Field>
                    <Form.Field required>
                      <label>{t('password')}</label>
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        className="inputPassword"
                        placeholder={t('password_placeholder')}
                        ref={register({
                          required: 'You must specify a password',
                          minLength: {
                            value: 8,
                            message: 'Password must have at least 8 characters',
                          },
                        })}
                      />
                      <i
                        key={1}
                        onClick={togglePasswordVisiblity}
                        className="iconEye6 iconEye:"
                      >
                        {eye}
                      </i>
                    </Form.Field>
                    <Grid.Row centered>
                      <Divider hidden />
                      <Button
                        fluid
                        className="btn btn-primary btn-primary-ngo"
                        onClick={handleSubmit(RouteChangeHome)}
                        type="submit"
                      >
                        {t('sign_in_btn')}
                      </Button>
                    </Grid.Row>
                  </Form>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column
                  mobile={9}
                  tablet={5}
                  computer={6}
                  textAlign="right"
                >
                  <Header color="grey" as="h6" className="signin-caption">
                    {t('dont_have_account')}
                  </Header>
                </Grid.Column>
                <Grid.Column
                  mobile={7}
                  tablet={5}
                  computer={5}
                  textAlign="left"
                >
                  <Header
                    as="h5"
                    onClick={() => RouteChangeSignUp()}
                    className="cursor signin-inlineBtn signin-inlineBtn-ngo"
                  >
                    {t('sign_up')}
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8} only="computer tablet">
            <Image src="./images/NGOSignIn.png" className="signin-illust" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default NGOSignIn;
