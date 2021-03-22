import React, { useState } from 'react';
import { Grid, Segment, Image, Icon, Header } from 'semantic-ui-react';

function ItemSkillTwo({ id, name, image, toggleHandler }) {
  const [active, setActive] = useState();

  const chosenHandler = (id) => {
    toggleHandler(id);
    setActive(id);
    if (active) {
      setActive();
    }
  };

  return (
    <Grid.Column mobile={8} tablet={4} computer={4} stretched>
      <Segment
        onClick={() => chosenHandler(id)}
        className={`${
          active ? 'VolunteerSecondaryBorder heightCard' : ' heightCard'
        } item-skill`}
      >
        <svg
          className={
            active ? 'iconSkillsVolunteersSelected iconSkills' : 'iconSkills'
          }
        >
          <use xlinkHref={image}></use>
        </svg>
        <Icon
          name="check circle"
          size="large"
          className={`${
            active
              ? 'iconSelect VolunteerSecondaryColor'
              : 'iconSelect whiteChecker'
          } item-skill__check`}
        />
        <Grid className="textCardNGO">
          <Header
            as="h6"
            textAlign="center"
            className={`${
              active ? 'VolunteerSecondaryColor' : 'grey60'
            } item-skill__text`}
          >
            {name}
          </Header>
        </Grid>
      </Segment>
    </Grid.Column>
  );
}

export default ItemSkillTwo;
