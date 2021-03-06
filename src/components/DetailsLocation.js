import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Progress,
  Divider,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../adapters/updateAction';

function DetailsLocation() {
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, errors, register } = useForm({
    defaultValues: state.yourDetails,
  });

  const { t } = useTranslation();

  const history = useHistory();

  const RouteChangeBack = () => {
    let path = `sign-up2`;
    history.push(path);
  };

  const RouteChangeNext = (data) => {
    actions.updateAction(data);
    let path = `sign-up-finish`;
    history.push(path);
    // console.log(data);
    // console.log(JSON.stringify(state, null, 2));
  };

  return (
    <Segment size="large" padded="very" className="height100">
      <Progress percent={100} attached="top" size="medium" color="pink" />
      <Grid centered>
        <Grid.Column width={16} textAlign="center">
          <Header as="h6" color="grey" className="form-step">
            {t('step3')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h2" className="headingText form-title">
            {t('location_info')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h5" color="grey" className="form-subtitle">
            {t('sub_text_location_info')}
          </Header>
        </Grid.Column>
        <Grid.Row streched="true">
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Form>
              <Form.Field>
                <label>{t('city')}</label>
                <input
                  type="text"
                  name="city"
                  ref={register}
                  placeholder={t('city_placeholder')}
                />
                {/* <ErrorMessage errors={errors} as="p"/> */}
              </Form.Field>
              <Form.Field required>
                <label>{t('postal_code')}</label>
                <input
                  name="postalCode"
                  ref={register({ required: true })}
                  placeholder={t('postal_code_placeholder')}
                />
              </Form.Field>
              {errors.postalCode && (
                <p as="p" className="red">
                  This field is required
                </p>
              )}
              <Divider hidden />
              <Header
                as="h5"
                color="grey"
                textAlign="center"
                className="caption"
              >
                {t('terms_conditions')}
              </Header>
              <Button.Group widths="2">
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

export default DetailsLocation;
