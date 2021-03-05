import React, {useState} from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ItemActivity from '../containers/ItemActiity';
import dataActivities from '../data/dataActivities';
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

    let collectedItems = []
function DetailsActivities () {
    const { actions } =  useStateMachine({ updateAction });
    const [collect, setCollect] = useState(collectedItems);

    const { t } = useTranslation();

    const history = useHistory();

    const toggleHandler = (id) => {
        const clickedItem = dataActivities.filter((item) => item.id === id);
        const item = clickedItem[0].name.toLowerCase();
        console.log(item);
            if (collectedItems.includes(item)) {
                collectedItems = collectedItems.filter(el =>  el !== item)
            } else {
                collectedItems.push(item)
            }
            // collectedItems = state.activities;
        //console.log(collectedItems);
        updateActionForActivities({activities: collectedItems});
    }

    const updateActionForActivities = (data) => {
        actions.updateAction(data);
    }

    const RouteChangeBack = () => {
        let path = `sign-up-finish`;
        history.push(path);
    }

    const RouteChangeMoreInfo = () => {
        let path = `details-skills`;
        history.push(path);
    }
    return (
        <Segment size='large'>
                <Header as='h2'>
                    {t('make_difference')}
                </Header>
                <Grid stackable>
                {dataActivities.map((item) => {
                    return(
                        <ItemActivity key={item.id} {...item} toggleHandler={toggleHandler}/>
                    )
                })}
                </Grid>
                <Divider hidden/>
                <Button.Group widths='2'>
                                <Button basic color='blue' as='a' onClick={() => RouteChangeBack()}>{t('back')}</Button>
                                <Button primary type='submit' onClick={() => RouteChangeMoreInfo()}>{t('next')}</Button>
                </Button.Group>
        </Segment>
    )
}

export default DetailsActivities;
