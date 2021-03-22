import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Segment, Header, Button, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dataProjects from '../../../data/dataProjects';

function VolJoinedProject() {
  let { id } = useParams();

  const el = dataProjects[id - 1];
  const {
    name,
    organization,
    duration,
    days,
    time,
    place,
    contact_person,
    contact_email,
  } = el;
  const { t } = useTranslation();

  const history = useHistory();

  const backHome = () => {
    const path = `/projects`;
    history.push(path);
  };

  return (
    <Segment
      size="large"
      padded="very"
      className="centerAlign"
      style={{ minHeight: '95vh' }}
    >
      <Grid stackable container>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={10}
            verticalAlign="middle"
          >
            <Grid>
              <Grid.Column width={16} textAlign="center">
                <Header as="h2" className="headingText confirm-title">
                  {t('your_request')}
                </Header>
              </Grid.Column>
              <Grid.Column width={16} textAlign="center">
                <Header as="h5" className="confirm-text">
                  {t('sub_text_your_request')}
                </Header>
              </Grid.Column>
              <Grid.Column width={10} style={{ margin: 'auto' }}>
                <Header as="h4" className="confirm-project__title">
                  {name}
                </Header>
                <Header
                  as="h5"
                  color="grey"
                  className="confirm-project__organization"
                >
                  {organization}
                </Header>
              </Grid.Column>
              <Grid.Row>
                <Grid.Column
                  mobile={16}
                  tablet={12}
                  computer={10}
                  style={{ margin: 'auto' }}
                >
                  <Header as="h5">
                    <Image
                      src="/./images/icons/calendar.svg"
                      className="mobileHide"
                    />
                    <Header.Content className="confirm-project__section">
                      {t('date')}
                      <Header.Subheader className="confirm-project__detail">
                        {duration && ' | ' + duration} {days && ' | ' + days}{' '}
                        {time && ' | ' + time}
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                  <Header as="h5">
                    <Image
                      src="/./images/icons/location.svg"
                      className="mobileHide"
                    />
                    <Header.Content className="confirm-project__section">
                      {t('location')}
                      <Header.Subheader className="confirm-project__detail">
                        {place}
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                  <Header as="h5">
                    <Image
                      src="/./images/icons/contact.svg"
                      className="mobileHide"
                    />
                    <Header.Content className="confirm-project__section">
                      {t('contact_info_vol')}
                      <Header.Subheader className="confirm-project__detail">
                        {contact_person} / {contact_email}
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={6}
                  style={{ margin: '20px auto' }}
                >
                  <Button
                    className="btn btn-primary-volunteer"
                    fluid
                    onClick={() => backHome()}
                  >
                    {t('back_home_btn')}
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={6}
            verticalAlign="middle"
          >
            <Image src="/./images/VolunteersRequestSent.png" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default VolJoinedProject;
