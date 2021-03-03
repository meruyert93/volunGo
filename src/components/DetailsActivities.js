import React from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import ItemActivity from '../containers/ItemActiity';
import dataActivities from '../data/dataActivities';

function DetailsActivities () {
    const { t } = useTranslation();

    return (
        <Segment size='large'>
                <Header as='h2'>
                    {t('make_difference')}
                </Header>
                <Grid stackable>
                {dataActivities.map((item) => {
                    return(
                        <ItemActivity key={item.id} {...item}/>
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
