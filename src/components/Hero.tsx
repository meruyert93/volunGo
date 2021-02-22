import React from 'react'
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function Hero() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' className="hero-section" color="blue" raised>
            <Grid container>
                <Grid.Row floated='left'>
                    <Grid.Column width={16}>
                        <Header as='h1'>
                        {t('find')}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row floated='left'>
                    <Grid.Column>
                        <Button secondary>{t('get_started')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Hero
