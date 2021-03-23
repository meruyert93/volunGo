import React, { useState } from 'react';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function ItemYourProjects({
  id,
  image,
  name,
  organization,
  duration,
  days,
  time,
  place,
  displayDetailedProject,
}) {
  const [active, setActive] = useState();

  const { t } = useTranslation();

  return (
    <Grid.Column mobile={16} tablet={5} computer={5} stretched>
      <Card
        onClick={() => {}}
        className="projectCard"
        style={{ padding: '8px 12px 4px 12px' }}
      >
        <Card.Content>
          <Card.Header
            className="cardHeadingText card-title"
            style={{ marginBottom: '8px' }}
          >
            {name}{' '}
          </Card.Header>
          <p className="textPrimary smallText card-organization">
            {organization}
          </p>
        </Card.Content>
        <Card.Content>
          <div className="tag tag-pending">{t('pending')}</div>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ItemYourProjects;
