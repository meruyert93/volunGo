import React, { useState } from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import dataSkills from "../data/dataSkills";
import ItemSkill from "../containers/ItemSkill";

    let collectedItems = [];

function DetailsSkills() {
    const [collect, setCollect] = useState(collectedItems);
    const { t } = useTranslation();

    const toggleHandler = (id) => {
        const clickedItem = dataSkills.filter((item) => item.id === id);
        const item = clickedItem[0].name.toLowerCase();

        if (collectedItems.includes(item)) {
            collectedItems = collectedItems.filter(el => el !== item);
        }
        else {
            collectedItems.push(item);
        }
        console.log((collectedItems));
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
                <Button basic color='blue' as='a'>{t('back')}</Button>
                <Button primary type='submit'>{t('next')}</Button>
            </Button.Group>
        </Segment>
    )
}

export default DetailsSkills