import React from 'react';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

function NGOEmptyDashboard() {
    const { t } = useTranslation();

    return (
        <Segment basic className="height100">
            <Grid container verticalAlign='middle'>
                <Grid.Column textAlign='center'>
                    <Divider/>
                    <Divider hidden/>
                    <Divider hidden/>
                    <Header>{t('empty_dashboard')}</Header>
                    <p>{t('sub_text_empty_dashboard')}</p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default NGOEmptyDashboard
