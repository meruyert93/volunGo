import React from 'react';
import { Grid, Segment, Header, Button, Form,  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

function DetailsLocation () {
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register } = useForm({
        defaultValues: state.yourDetails
    });

    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `sign-up2`;
        history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateAction(data);
        let path = `sign-up-finish`;
        history.push(path);
        console.log(data);
        console.log(JSON.stringify(state, null, 2));
    }

    return (
        <Segment size='large' padded='very'>
            <Grid>
            <Header  as='h2'> 
            {t('location_info')}
            </Header>
            <Header as ='h5'>
            {t('sub_text_location_info')}
            </Header>
            <Grid.Row streched="true">
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>{t('city')}</label>
                                <input 
                                    name="city"
                                    ref={register}
                                />
                                {/* <ErrorMessage errors={errors} as="p"/> */}
                            </Form.Field>
                            <Form.Field>
                                <label>{t('postal_code')}</label>
                                <input
                                    name="postalCode"
                                    ref={register}
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

export default DetailsLocation 