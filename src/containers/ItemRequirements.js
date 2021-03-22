import React, { useState } from 'react';
import {
  Grid,
  Header,
  Icon,
  Image,
  Card,
  Segment,
  Divider,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useStateMachine } from 'little-state-machine';
import UpdateProjectAction from '../adapters/updateProjectAction';

function ItemRequirements({ id, name, image, toggleHandler }) {
  const [active, setActive] = useState();

  const { state, actions } = useStateMachine({ UpdateProjectAction });

  const chosenHandler = (id) => {
    toggleHandler(id);
    setActive(id);
    if (active) {
      setActive();
    }
  };

  return (
    <Grid.Column>
      <Segment
        onClick={() => chosenHandler(id)}
        className={`${
          active ? 'ngoSecondaryBorder heightCard' : 'heightCard'
        } item-skill`}
      >
        {/* <Image src={image} size='mini' className="imageCard iconSkills" centered/>    */}
        <svg
          className={active ? 'iconSkillsSelected iconSkills' : 'iconSkills'}
        >
          <use xlinkHref={image}></use>
        </svg>
        <Icon
          name="check circle"
          size="large"
          className={`${
            active
              ? 'iconSelect ngoSecondaryColorPicker'
              : 'iconSelect whiteChecker'
          } item-skill__check`}
        />
        <Grid className="textCardNGO">
          <Header
            as="h5"
            textAlign="center"
            className={`${
              active ? 'ngoSecondaryColorPicker' : 'grey60'
            } item-skill__text`}
          >
            {name}
          </Header>
        </Grid>
      </Segment>
    </Grid.Column>
  );
}

export default ItemRequirements;
