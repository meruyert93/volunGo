import React from 'react'
import { Grid, Segment, Header, Icon, Container } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function HeroHome() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' color="orange" inverted>
            <Grid floated='left' stretched >
                <Grid.Row floated='left'>
                    <Grid.Column width={16}>
                        <Header as='h1'>
                        {t('welcome')}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row floated='left'>
                    <Grid.Column mobile={12} tablet={12} computer={4} floated='left'>
                        <Container fluid text>
                            <p>{t('profile')}</p>
                        </Container>
                        
                    </Grid.Column>
                    <Grid.Column mobile={4} tablet={4} computer={12} floated='left'>
                    <Icon name="arrow alternate circle right" size='big' fitted/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default HeroHome
