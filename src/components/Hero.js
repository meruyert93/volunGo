import React from 'react'
import { Grid, Segment, Header, Button, Divider, Image } from 'semantic-ui-react';
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
        <Segment size='large' padded='very' raised>
            <Grid container>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign='middle'>
                        <Header as='h1' className="headingText">
                        {t('find')}
                        </Header>
                        <p>{t('sub_text_find')}</p>
                        <Divider hidden/>
                        <Button color='pink' onClick={() =>  {RouteChangeSignUp()}}>{t('get_started')}</Button>
                    </Grid.Column>
                    <Grid.Column width={8} only='computer tablet'>
                        <Image src="./images/heroSection/heroVolunteers.jpg" size="large" rounded/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Hero
