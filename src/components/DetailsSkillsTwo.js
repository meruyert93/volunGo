import React, { useState } from 'react'
import { Grid, Segment, Header, Button, Divider, Progress  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import dataSkills from "../data/dataSkills";
import ItemSkillTwo from "../containers/ItemSkills2";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";
import { userUpdate } from '../adapters/userAPI';

    let collectedItems = [];

function DetailsSkillsTwo() {
    const { state, actions } =  useStateMachine({ updateAction });

    // const [collect, setCollect] = useState(collectedItems);

    const postData  = async (data) => {
        const responseUserUpdate = await userUpdate(data);
        return responseUserUpdate;
        //console.log(JSON.stringify(state.yourDetails, null, 2))
        // console.log(state)
    }

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
        let path = `details-activities2`;
        history.push(path);
    }

    const RouteChangeHome = async () => {
        const dataForUpdate = {'activities': state.yourDetails.activities, 'skills': state.yourDetails.skills}
        const postMoreData = await postData(JSON.stringify(dataForUpdate));
        console.log(dataForUpdate);
        let path = `projects`;
        if (postMoreData.status ===  'success') {
            return history.push(path);
        }
         //TODO: "sorry there is smth wrong with server, try again"
        //create component to handle if there is no available taken
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'>
            <Progress percent={100} attached='top' size='medium' color='pink'/>
            <Grid>
                <Grid.Column width={16} textAlign="center">
                    <Header as="h6" color="grey">
                        {t('stepTwo')}
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('put_your_skills')}
                    </Header>
                </Grid.Column>
                {/* <Grid.Column width={16} textAlign="center">
                    <Header as="h6" color="grey">
                    {t('sub_text_select')}
                    </Header>
                </Grid.Column> */}
            </Grid>

            <Grid columns={2} container centered>
                {dataSkills.map((item) =>{
                    return(
                        <ItemSkillTwo key={item.id} {...item} toggleHandler={toggleHandler}/>
                    )
                })}
            </Grid>
            <Divider hidden/>
            <Grid.Column className="flexJustifyContent">
                <Button basic color='pink' as='a' onClick={() => RouteChangeBack()}>{t('back')}</Button>
                <Button color="pink" type='submit'  onClick={() => RouteChangeHome()}>{t('next')}</Button>
            </Grid.Column>
        </Segment>
    )
}

export default DetailsSkillsTwo
