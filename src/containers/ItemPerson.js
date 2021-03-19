import React from 'react';
import { Grid, Segment, Header, Divider, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';

function ItemPerson({ id, name, image, position }) {
  const { t } = useTranslation();

  return (
    <Grid.Column mobile={8} tablet={5} computer={5} stretched>
      <Segment basic>
        <Grid.Row>
          <Grid.Column>
            <Image src={image} centered className="profile-image" />
            <Header as="h3" className="profile-name">
              {name}
            </Header>
            <p className="profile-position">{position}</p>
          </Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid.Column>
  );
}

export default ItemPerson;
