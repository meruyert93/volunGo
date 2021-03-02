import React, { useState } from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";


function Forms() {
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register } = useForm({
        defaultValues: state.yourDetails
    });

    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newPath`;
        history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateAction(data);
        let path = `sign-up2`;
        history.push(path);
        console.log(data)
    }

    return (
        <Segment size='large' padded='very'>
            <Grid stackable columns={2} verticalAlign='middle' centered>
                <Header  as='h3'> 
                {t('account')}
                </Header>
                <Grid.Row streched="true">
                    <Grid.Column>
                        <Form onSubmit={handleSubmit(RouteChangeNext)}>
                            <Form.Field>
                                <label>{t('email')}</label>
                                <input 
                                    name="email"
                                    ref={register({ required: "This is required"})}
                                />
                                {/* <ErrorMessage errors={errors} as="p"/> */}
                            </Form.Field>
                            <Form.Field>
                                <label>{t('password')}</label>
                                <input
                                    name="password"
                                    ref={register({ required: "This is required"})}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>{t('confirm_password')}</label>
                                <input
                                    name="passwordConfirm"
                                    ref={register({ required: "This is required"})}
                                />
                            </Form.Field>
                            <Button.Group widths='2'>
                                <Button basic color='blue' as='a' onClick={RouteChangeBack}>{t('back')}</Button>
                                <Button primary onClick={handleSubmit(RouteChangeNext)} type='submit'>{t('next')}</Button>
                            </Button.Group>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Forms
