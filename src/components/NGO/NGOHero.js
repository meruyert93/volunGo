import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Divider,
  Image,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NGOHero() {
  const { t } = useTranslation();

  const history = useHistory();

  const RouteChangeSignUp = () => {
    let path = `/ngo-sign-up1`;
    history.push(path);
  };

  return (
    <Segment size="large" padded="very" raised>
      <Grid verticalAlign="middle" container style={{ height: '75vh' }}>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={8}
            verticalAlign="middle"
          >
            <Header as="h1" className="NGOtextDark hero-title">
              {t('match_volunteers')}
            </Header>
            <p className="hero-subtitle">{t('sub_text_match_volunteers')}</p>
            <Divider hidden />
            <Button
              className="btn btn-primary-ngo"
              onClick={() => {
                RouteChangeSignUp();
              }}
            >
              {t('join_as_org')}
            </Button>
          </Grid.Column>
          <Grid.Column width={8} only="computer tablet">
            <Image
              src="./images/heroSection/heroNGO.png"
              className="hero-image hero-image-ngo"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default NGOHero;
