import React, {useState} from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import ItemActivity from '../containers/ItemActiity';
import dataActivities from '../data/dataActivities';

    let collectedItems = []
function DetailsActivities () {
    const [collect, setCollect] = useState(collectedItems);

    const { t } = useTranslation();

    const toggleHandler = (id) => {
        const clickedItem = dataActivities.filter((item) => item.id === id);
        const item = clickedItem[0].name.toLowerCase();
        console.log(item);
            if (collectedItems.includes(item)) {
                collectedItems = collectedItems.filter(el =>  el !== item)
            } else {
                collectedItems.push(item)
            }
        console.log(collectedItems);
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
                                <Button basic color='blue' as='a'>{t('back')}</Button>
                                <Button primary type='submit'>{t('next')}</Button>
                </Button.Group>
        </Segment>
    )
}

export default DetailsActivities;
