import React from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function Forms() {
    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newPath`;
        history.push(path);
    }

    const RouteChangeNext = () => {
        let path = `sign-up2`;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'>
            <Grid stackable columns={2} verticalAlign='middle' centered>
                <Header  as='h3'> 
                {t('account')}
                </Header>
                <Grid.Row streched>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>{t('email')}</label>
                                <input/>
                            </Form.Field>
                            <Form.Field>
                                <label>{t('password')}</label>
                                <input/>
                            </Form.Field>
                            <Form.Field>
                                <label>{t('confirm_password')}</label>
                                <input/>
                            </Form.Field>
                            <Button.Group widths='2'>
                                <Button basic color='blue' as='a' onClick={RouteChangeBack}>{t('back')}</Button>
                                <Button primary onClick={RouteChangeNext}>{t('next')}</Button>
                            </Button.Group>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Forms
