import React, { useRef, useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Progress,
  Divider,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../adapters/updateAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;

function Forms() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, errors, register, watch } = useForm({
    defaultValues: state.yourDetails,
  });
  const password = useRef({});
  password.current = watch('password', '');


    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
        // console.log('toggling')
    };


  const { t } = useTranslation();

  const history = useHistory();

  const RouteChangeBack = () => {
    let path = `/`;
    history.push(path);
  };

  const RouteChangeNext = (data) => {
    actions.updateAction(data);
    let path = `sign-up2`;
    history.push(path);
    //console.log(data)
  };

  return (
    <Segment size="large" padded="very" className="height100">
      <Progress percent={33} attached="top" size="medium" color="pink" />
      <Grid stackable verticalAlign="middle" centered>
        <Grid.Column width={16} textAlign="center">
          <Header as="h6" color="grey" className="form-step">
            {t('step1')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h2" className="headingText form-title">
            {t('account')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h5" color="grey" className="form-subtitle">
            {t('sub_text_account')}
          </Header>
        </Grid.Column>
        <Grid.Row streched="true">
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Form onSubmit={handleSubmit(RouteChangeNext)}>
              <Form.Field required>
                <label>{t('email')}</label>
                <input
                  type="text"
                  name="email"
                  ref={register({ required: true })}
                  placeholder={t('email_placeholder')}
                />
              </Form.Field>
              {errors.email && (
                <p as="p" className="red">
                  Your must specify an email
                </p>
              )}
              {/* <ErrorMessage errors={errors} as="p"/> */}
              <Form.Field required style={{ position: 'relative' }}>
                <label>{t('password')}</label>
                <input
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  ref={register({
                    required: 'You must specify a password',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                  })}
                  className="inputPassword"
                  placeholder={t('password_placeholder')}
                />
                <i
                  key={1}
                  onClick={togglePasswordVisiblity}
                  className="iconEye1"
                >
                  {eye}
                </i>
              </Form.Field>
              {errors.password && (
                <p as="p" className="red">
                  {errors.password.message}
                </p>
              )}
              <Form.Field required style={{ position: 'relative' }}>
                <label>{t('confirm_password')}</label>
                <input
                  name="passwordConfirm"
                  type={passwordShown ? 'text' : 'password'}
                  ref={register({
                    validate: (value) =>
                      value === password.current ||
                      'The passwords do not match',
                  })}
                  className="inputPassword"
                  placeholder={t('confirm_password_placeholder')}
                />
                <i
                  key={2}
                  onClick={togglePasswordVisiblity}
                  className="iconEye2"
                >
                  {eye}
                </i>
              </Form.Field>
              {errors.passwordConfirm && (
                <p as="p" className="red">
                  {errors.passwordConfirm.message}
                </p>
              )}
              <Divider hidden />
              <Button.Group widths="2" className="btn-group">
                <Button
                  className="btn btn-secondary btn-secondary-volunteer"
                  as="a"
                  onClick={RouteChangeBack}
                >
                  {t('back')}
                </Button>
                <Button
                  className="btn btn-primary-volunteer"
                  onClick={handleSubmit(RouteChangeNext)}
                  type="submit"
                >
                  {t('next')}
                </Button>
              </Button.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Forms;
