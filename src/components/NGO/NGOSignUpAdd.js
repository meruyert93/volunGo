import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Progress,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateNGOAction from '../../adapters/updateNGOAction';

function NGOSignUpAdd() {
  const { t } = useTranslation();
  const { state, actions } = useStateMachine({ updateNGOAction });
  const { handleSubmit, errors, register, watch } = useForm({
    defaultValues: state.ngoDetails,
  });

  const history = useHistory();

  const RouteChangeBack = () => {
    let path = `ngo-sign-up1`;
    history.push(path);
  };

  const RouteChangeNext = (data) => {
    actions.updateNGOAction(data);
    let path = `/ngo-projects-dashboard`;
    history.push(path);
    //console.log(data)
  };

  return (
    <Segment size="large" padded="very" className="height100">
      <Progress percent={100} attached="top" size="medium" color="blue" />
      <Grid stackable verticalAlign="middle" centered>
        <Grid.Column width={16} textAlign="center">
          <Header as="h6" color="grey" className="form-step">
            {t('stepTwo')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h2" className="NGOtextDark form-title">
            {t('register_org')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h4" color="grey" className="form-subtitle">
            {t('sub_text_register_org')}
          </Header>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Form>
              <Form.Field required>
                <label>{t('name_org')}</label>
                <input
                  type="text"
                  name="name_org"
                  ref={register({ required: true })}
                />
              </Form.Field>
              <Form.Field required>
                <label>{t('about_org')}</label>
                <textarea
                  type="text"
                  name="about_org"
                  ref={register({ required: true })}
                />
              </Form.Field>
              <Form.Field required>
                <label>{t('url_org')}</label>
                <input
                  type="text"
                  name="url_org"
                  ref={register({ required: true })}
                  placeholder="https://"
                />
              </Form.Field>
              <Grid.Row columns={1}>
                <Button.Group widths="2" className="btn-group">
                  <Button
                    className="btn btn-secondary btn-secondary-ngo"
                    onClick={RouteChangeBack}
                  >
                    {t('back')}
                  </Button>
                  <Button
                    className="btn btn-primary-ngo"
                    onClick={handleSubmit(RouteChangeNext)}
                  >
                    {t('complete')}
                  </Button>
                </Button.Group>
              </Grid.Row>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default NGOSignUpAdd;
