import React from 'react';
import { Grid, Segment, Header, Button, Progress } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dataVolunteers from "../../data/dataVolunteers";
import ItemVolunteer from "../../containers/ItemVolunteer";

function NGOVolunteers() {

    const { t } = useTranslation();

    const history = useHistory();
    
    return (
        <Segment>
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
            </Grid>
        </Segment>
    )
}

export default NGOVolunteers
