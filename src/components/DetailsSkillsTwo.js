import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Divider,
  Progress,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import dataSkills from '../data/dataSkills';
import ItemSkillTwo from '../containers/ItemSkills2';
import { useHistory } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../adapters/updateAction';

let collectedItems = [];

function DetailsSkillsTwo() {
  const { state, actions } = useStateMachine({ updateAction });

  // const [collect, setCollect] = useState(collectedItems);

  const { t } = useTranslation();

  const history = useHistory();

  const toggleHandler = (id) => {
    const clickedItem = dataSkills.filter((item) => item.id === id);
    const item = clickedItem[0].name.toLowerCase();

    if (collectedItems.includes(item)) {
      collectedItems = collectedItems.filter((el) => el !== item);
    } else {
      collectedItems.push(item);
    }
    //console.log((collectedItems));
    updateActionForSkills({ skills: collectedItems });
  };
  //Updating actions for object
  const updateActionForSkills = (data) => {
    actions.updateAction(data);
  };

  const RouteChangeBack = () => {
    let path = `details-activities2`;
    history.push(path);
  };

  const RouteChangeHome = () => {
    let path = `projects`;
    history.push(path);
    FetchData();
  };

  const FetchData = () => {
    console.log(JSON.stringify(state, null, 2));
    // console.log(state)
  };

  return (
    <Segment size="large" padded="very">
      <Progress percent={100} attached="top" size="medium" color="pink" />
      <Grid>
        <Grid.Column width={16} textAlign="center">
          <Header as="h6" color="grey" className="form-step">
            {t('stepTwo')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h2" className="headingText form-title">
            {t('put_your_skills')}
          </Header>
        </Grid.Column>
        <Grid.Column width={16} textAlign="center">
          <Header as="h5" color="grey" className="form-subtitle">
            {t('sub_text_skills')}
          </Header>
        </Grid.Column>
        {/* <Grid.Column width={16} textAlign="center">
                    <Header as="h6" color="grey">
                    {t('sub_text_select')}
                    </Header>
                </Grid.Column> */}
      </Grid>

      <Grid columns={2}>
        {dataSkills.map((item) => {
          return (
            <ItemSkillTwo
              key={item.id}
              {...item}
              toggleHandler={toggleHandler}
            />
          );
        })}
      </Grid>
      <Divider hidden />
      <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={6} textAlign="center">
          <Button.Group widths="2" className="btn-group">
            <Button
              className="btn btn-secondary btn-secondary-volunteer"
              as="a"
              onClick={() => RouteChangeBack()}
            >
              {t('back')}
            </Button>
            <Button
              className="btn btn-primary-volunteer"
              type="submit"
              onClick={() => RouteChangeHome()}
            >
              {t('complete')}
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default DetailsSkillsTwo;
