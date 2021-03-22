import React from 'react';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

function VolProjectDetailUpperPart({ el }) {
  const { id, image, name, organization, content } = el;
  return (
    <Segment size="large" padded="very">
      <Grid centered>
        <Grid.Column mobile={16} tablet={12} computer={12}>
          <Image src={image} fluid className="projectDetail-image" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={12} textAlign="center">
          <Header className="projectDetail-title">{name}</Header>
          <p className="textPrimary projectDetail-organization">
            {organization}
          </p>
          <p className="projectDetail-description">{content}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default VolProjectDetailUpperPart;
