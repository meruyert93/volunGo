import React from 'react';
import { Grid, Segment, Header, Divider, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function NGOMain() {
  const { t } = useTranslation();

  return (
    <Segment
      size="large"
      padded="very"
      textAlign="center"
      className="NGOBackgroundDark"
    >
      <Header as="h3" className="textWhite session-name">
        {t('why')}
      </Header>
      <Header as="h2" className="textWhite session-title session-title-light">
        {t('sub_text_ngo_why_volungo')}
      </Header>
      <Grid
        verticalAlign="middle"
        stackable
        container
        columns={2}
        padded
        divided
      >
        <Grid.Row centered padded>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Divider hidden />
            <Image src="./images/heroSection/NGOmockup.png" fluid />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Grid.Column width={5} textAlign="center">
              <Divider hidden />
              <Image
                src="./images/heroSection/matching.svg"
                centered
                className="sub-session-icon"
              />
              <Header as="h4" className="textWhite sub-session-title">
                {t('matching')}
              </Header>
              <p className="textWhite sub-session-text">
                {t('sub_text_matching')}
              </p>
            </Grid.Column>
            <Grid.Column width={5} textAlign="center">
              <Divider hidden />
              <Image
                src="./images/heroSection/recruiting.svg"
                centered
                className="sub-session-icon"
              />
              <Header as="h4" className="textWhite sub-session-title">
                {t('recruiting')}
              </Header>
              <p className="textWhite sub-session-text">
                {t('sub_text_recruiting')}
              </p>
            </Grid.Column>
            <Grid.Column width={5} textAlign="center">
              <Divider hidden />
              <Image
                src="./images/heroSection/managing.svg"
                centered
                className="sub-session-icon"
              />
              <Header as="h4" className="textWhite sub-session-title">
                {t('managing')}
              </Header>
              <p className="textWhite sub-session-text">
                {t('sub_text_managing')}
              </p>
            </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default NGOMain;
