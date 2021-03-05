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
        <Segment size='large' padded='very'>
            <Grid stackable columns={1} verticalAlign='middle' centered>
                <Header  as='h2'> 
                {t('congratulation')}
                </Header>
                <Grid.Row centered >
                    <Grid.Column computer={6} textAlign="center">
                        <Image src='./images/celebration.svg' fluid />
                        <Header as='h3'>
                        {t('personalize')}
                    </Header>
                    <p>{t('sub_text_personalize')}</p>
                    <Button fluid primary onClick={() => {RouteChangeMoreInfo()}}>{t('complete_profile')}</Button>
                    <Divider hidden />
                    <Button fluid basic color='blue' onClick={() => RouteChangeHome()}>{t('skip_now')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default SignUpFinish
