import React, { useState } from 'react';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import '../translations/i18n';

function ItemProjectForUsers({
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

  const chosenHandler = (id) => {
    displayDetailedProject(id);
    // setActive(id);
    // if (active) {
    //     setActive();
    // }
  };
  return (
    <Grid.Column mobile={16} tablet={5} computer={5} stretched>
      <Card onClick={() => displayDetailedProject(id)} className="projectCard">
        <Image src={image} wrapped ui={false} className="imageCard" />
        <Icon
          name="heart"
          size="large"
          className={
            active ? 'pinkChecker iconSelect' : 'whiteChecker iconSelect'
          }
          onClick={() => chosenHandler(id)}
        />
        <Card.Content>
          <Card.Header className="cardHeadingText card-title">
            {name}{' '}
          </Card.Header>
          <p className="textPrimary card-organization">{organization}</p>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <p className="card-info">
              <Icon name="calendar alternate outline" color="grey" />
              {duration && ' | ' + duration} {days && ' | ' + days}{' '}
              {time && ' | ' + time}
            </p>
          </Card.Meta>
          <Card.Meta>
            <p className="card-info">
              <Icon name="map marker alternate" color="grey" />
              {place}
            </p>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default ItemProjectForUsers;
