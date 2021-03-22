import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Image,
  Container,
  Card,
  Divider,
  Icon,
} from 'semantic-ui-react';

function ItemVolunteer({ id, image, name, projects, skill1, skill2, skill3 }) {
  const [active, setActive] = useState();

  const chosenHandler = (id) => {
    setActive(id);
    if (active) {
      setActive();
    }
  };

  return (
    <Grid.Column>
      <Card
        onClick={() => chosenHandler(id)}
        className={active && 'ngoSecondaryBorder'}
        style={{ borderRadius: '10px', overflow: 'hidden' }}
      >
        <Image src={image} />
        <Card.Content textAlign="center">
          <Card.Header className="card-name">{name}</Card.Header>
        </Card.Content>
        <Card.Content textAlign="center">
          <p className="card-project-text">
            <span className="card-project-number ngoSecondaryColorPicker">
              {projects}
            </span>{' '}
            Projects
          </p>
          <Divider />
          <Icon name="check" className="ngoSecondaryColorPicker" />
          <span className="card-skill">{skill1}</span>
          <Divider />
          <Icon name="check" className="ngoSecondaryColorPicker" />
          <span className="card-skill">{skill2}</span>
          <Divider />
          <Icon name="check" className="ngoSecondaryColorPicker" />
          <span className="card-skill">{skill3}</span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ItemVolunteer;
