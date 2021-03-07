import React from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Image, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

function SignUpFinish() {
    const { t } = useTranslation();

    const { state } = useStateMachine(updateAction);

    const history = useHistory();

    const RouteChangeHome = () => {
        let path = `home`;
        history.push(path);
        console.log(JSON.stringify(state, null, 2))
    }

    const RouteChangeMoreInfo = () => {
        let path = `details-activities`;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very' className="height80">
            <Grid stackable columns={1} verticalAlign='middle' centered>
                <Header  as='h2' className="headingText"> 
                {t('congratulation')}
                </Header>
                <Grid.Row centered >
                    <Grid.Column mobile={16} tablet={8} computer={5} textAlign="center">
                        <Image src='./images/celebration.svg' fluid />
                        {/* <Header as='h3'>
                        {t('personalize')}
                        </Header> */}
                    <Header as="h6" color="grey">{t('welcome_to_community')}</Header>
                    <Button fluid color="pink" onClick={() => {RouteChangeMoreInfo()}}>{t('continue')}</Button>
                    <Divider hidden />
                    <Button fluid basic color='pink' onClick={() => RouteChangeHome()}>{t('skip_now')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default SignUpFinish
