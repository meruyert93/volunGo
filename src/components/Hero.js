import React from 'react'
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function Hero() {
    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeSignUp = () => {
        let path = `sign-up1`;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'  color="blue" raised className='heroSection'>
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
                        <Button secondary onClick={() =>  {RouteChangeSignUp()}}>{t('get_started')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Hero
