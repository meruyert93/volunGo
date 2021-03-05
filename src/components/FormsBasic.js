import React, { useRef, useState } from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Message, Input  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";


function Forms() {
    const [passwordShown, setPasswordShown] = useState(false);
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.yourDetails
    });
    const password = useRef({});
    password.current = watch("password", "");

    const togglePasswordVisiblity = () => {
        // setPasswordShown(!passwordShown);
        console.log('toggling')
      };

    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `/`;
        history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateAction(data);
        let path = `sign-up2`;
        history.push(path);
        //console.log(data)
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
                            <Form.Field required>
                                <label>{t('email')}</label>
                                <input
                                    type="text" 
                                    name="email"
                                    ref={register({ required: true})}
                                />
                              
                            </Form.Field>
                            {errors.email && <p as="p" className="red">Your must specify an email</p>}
                              {/* <ErrorMessage errors={errors} as="p"/> */}
                            <Form.Field required>
                                <label>{t('password')}</label>
                                <input
                                    type="password"
                                    name="password"
                                    ref={register({ required: "You must specify a password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must have at least 8 characters"
                                                    }
                                    })}
                                />
                    
                            </Form.Field>
                            {errors.password && <p as="p" className="red">{errors.password.message}</p>}
                            <Form.Field required>
                                <label>{t('confirm_password')}</label>
                                <input
                                    name="passwordConfirm"
                                    type="password"
                                    ref={register({ validate: value =>
                                                        value === password.current || "The passwords do not match"
                                    })}
                                />
                            </Form.Field>
                            {errors.passwordConfirm && <p as="p" className="red">{errors.passwordConfirm.message}</p>}
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
