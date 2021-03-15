import React from 'react';
import { Grid, Segment, Header, Button, Divider } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dataVolunteers from "../../data/dataVolunteers";
import ItemVolunteer from "../../containers/ItemVolunteer";

function NGOVolunteers({activPicker}) {

    const { t } = useTranslation();

    const history = useHistory();

    
    const RouteChangeBack = () => {
        let path = `newpath`;
        activPicker(4)
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        console.log(data);
        let path = `temporary`;
        history.push(path);
        //console.log(data)
    }
    
    return (
        <Segment basic size='large' padded='very' className="height100">
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('invite_volunteers')}
                    </Header>
                    <p>{t('sub_text_invite_volunteers')}</p>
                </Grid.Column>
                <Grid centered doubling stackable container padded='horizontally' columns={4}>
                    {dataVolunteers.map((item) => {
                        return(
                            <ItemVolunteer key={item.id} {...item}/>
                        )
                    })}
                </Grid>
                <Grid.Row textAlign="center" centered>
                    <Grid.Column className="flexJustifyContent">
                        <Divider hidden/>
                        <Button color="blue" basic onClick={() => RouteChangeBack()}>{t('back')}</Button>
                        <Button primary onClick={() => RouteChangeNext()}>{t('invite_complete_btn')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default NGOVolunteers
