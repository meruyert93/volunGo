import React from 'react';
import { Grid, Segment, Header, Button, Progress } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";
import dataSkills from "../../data/dataSkills";
import ItemRequirements from "../../containers/ItemRequirements";

    let collectedItems = []
function ProjectRequirements({activPicker}) {
    const { t } = useTranslation();
    const { actions } =  useStateMachine({ UpdateProjectAction });


    const history = useHistory();

    const toggleHandler = (id) => {
        const clickedItem = dataSkills.filter((item) => item.id === id);
        const item = clickedItem[0].name.toLowerCase();
        //console.log(item);
            if (collectedItems.includes(item)) {
                collectedItems = collectedItems.filter(el =>  el !== item)
            } else {
                collectedItems.push(item)
            }
            // collectedItems = state.activities;
        //console.log(collectedItems);
        updateActionForActivities({requirements: collectedItems});
    }

    const updateActionForActivities = (data) => {
        actions.UpdateProjectAction(data);
    }

    const RouteChangeBack = () => {
        activPicker(2);
        console.log('clicked')
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = () => {
        activPicker(4);
        let path = ``;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment basic size='large' padded='very'>
                <Grid>
                    <Grid.Column width={16} textAlign="center">
                        <Header  as='h2' className="headingText"> 
                            {t('requirements_for_vol')}
                        </Header>
                        <p> {t('sub_text_requirements_for_vol')}</p>
                    </Grid.Column>
                </Grid>
                <Grid stackable >
                    <Grid.Row centered padded="horizontally">
                        <Grid  doubling  stackable container padded='horizontally' columns={6}>
                        {dataSkills.map((item) => {
                            return(
                                <ItemRequirements key={item.id} {...item} toggleHandler={toggleHandler}/>
                            )
                        })}
                        </Grid>
                    </Grid.Row>
                </Grid>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                                <Button color="blue" onClick={() => RouteChangeBack()}>{t('back')}</Button>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Button primary onClick={() => RouteChangeNext()}>{t('next')}</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
    )
}

export default ProjectRequirements
