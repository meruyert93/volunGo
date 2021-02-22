import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function Main() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' >
            <Header  as='h2'> 
                {t('why')}
            </Header>
            <Grid stackable columns={3}>
                <Grid.Column width={5}>
                    <Icon name="search" color="blue"size="large"/>
                    <Header as ="h4">{t('opportunities')}</Header>
                    <p>{t('sub_text_opportunities')}</p>
                </Grid.Column>
                <Grid.Column  width={5}>
                    <Icon name="group" color="blue"size="large"/>
                    <Header as ="h4">{t('organizations')}</Header>
                    <p>{t('sub_text_organizations')}</p>
                </Grid.Column>
                <Grid.Column  width={5}>
                    <Icon name="line graph" color="blue"size="large"/>
                    <Header as ="h4">{t('impact')}</Header>
                    <p>{t('sub_text_impact')}</p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Main
