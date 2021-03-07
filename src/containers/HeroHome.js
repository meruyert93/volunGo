import React from 'react'
import { Grid, Segment, Header, Container, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import "../translations/i18n";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

function HeroHome() {
    const { t } = useTranslation();

    const { state } = useStateMachine(updateAction);

    const history = useHistory();

    const RouteChangeMoreInfo = () => {
        let path = `details-activities2`;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very' className="heroHome">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as='h1'className="textWhite">
                        {t('welcome')}
                        {state.yourDetails.firstName + "!"}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                    <Grid.Column mobile={16} tablet={12} computer={8} floated='left'>
                        <Container fluid text>
                            <p className="textWhite">{t('profile')}</p>
                        </Container>
                        
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={4} computer={5} floated='right'>
                    {/* <Icon name="arrow alternate circle right" size='big' fitted /> */}
                    <Button color="pink"  onClick={() => RouteChangeMoreInfo()}>{t('preferences')}</Button>
                    </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default HeroHome
