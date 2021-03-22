import React from 'react';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';
import ItemPerson from '../containers/ItemPerson';
import dataPeople from '../data/dataPeople';

function AboutUs() {
  const { t } = useTranslation();

  return (
    <Segment size="large" padded="very" textAlign="center">
      <Grid.Row>
        <Header as="h3" color="grey" className="session-name">
          {t('about_us')}
        </Header>
        <Divider hidden />
        <Header
          as="h2"
          className="headingText session-title session-title-dark-volunteer"
        >
          {t('sub_text_about_us')}
        </Header>
        <Divider hidden />
        <Divider hidden />
      </Grid.Row>
      <Grid columns={2}>
        {dataPeople.map((person) => {
          return <ItemPerson key={person.id} {...person} />;
        })}
      </Grid>
    </Segment>
  );
}

export default AboutUs;
