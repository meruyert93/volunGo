import React, { useState } from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import dataSkills from "../data/dataSkills";
import ItemSkill from "../containers/ItemSkill";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

    let collectedItems = [];

function DetailsSkillsTwo() {
    const { state, actions } =  useStateMachine({ updateAction });

    // const [collect, setCollect] = useState(collectedItems);

    const { t } = useTranslation();

    const history = useHistory();

    const toggleHandler = (id) => {
        const clickedItem = dataSkills.filter((item) => item.id === id);
        const item = clickedItem[0].name.toLowerCase();

        if (collectedItems.includes(item)) {
            collectedItems = collectedItems.filter(el => el !== item);
        }
        else {
            collectedItems.push(item);
        }
        //console.log((collectedItems));
        updateActionForSkills({skills: collectedItems})
    }
    //Updating actions for object 
    const updateActionForSkills = (data) => {
        actions.updateAction(data);
    }

    const RouteChangeBack = () => {
        let path = `details-activities`;
        history.push(path);
    }

    const RouteChangeHome = () => {
        
        let path = `projects`;
        history.push(path);
        FetchData()
    }

    const FetchData  = () => {
        console.log(JSON.stringify(state, null, 2))
        // console.log(state)
    }

    return (
        <Segment size='large' padded='very'>
            <Header as='h2'>
            {t('put_your_skills')}
            </Header>
            <Grid columns={2}>
                {dataSkills.map((item) =>{
                    return(
                        <ItemSkill key={item.id} {...item} toggleHandler={toggleHandler}/>
                    )
                })}
            </Grid>
            <Divider hidden/>
            <Button.Group widths='2'>
                <Button basic color='pink' as='a' onClick={() => RouteChangeBack()}>{t('back')}</Button>
                <Button color="pink" type='submit'  onClick={() => RouteChangeHome()}>{t('next')}</Button>
            </Button.Group>
        </Segment>
    )
}

export default DetailsSkillsTwo
