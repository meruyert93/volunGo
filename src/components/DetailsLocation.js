import React from 'react';
import { Grid, Segment, Header, Button, Form, Progress, Divider } from 'semantic-ui-react';
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
        // console.log(data);
        // console.log(JSON.stringify(state, null, 2));
    }

    return (
        <Segment size='large' padded='very' className="height70">
            <Progress percent={100} attached='top' size='medium' color='pink'/>
            <Grid>
            <Grid.Column width={16} textAlign="center">
                <Header as="h6" color="grey">
                    {t('step3')}
                </Header>
            </Grid.Column>
            <Grid.Column width={16} textAlign="center">
                <Header  as='h2' className="headingText"> 
                    {t('location_info')}
                </Header>
            </Grid.Column>
            <Grid.Column width={16} textAlign="center">
                <Header as="h6" color="grey">
                    {t('sub_text_location_info')}
                </Header>
            </Grid.Column>
            <Grid.Row streched="true">
                    <Grid.Column mobile={16} tablet={8} computer={3}>
                        <Form>
                            <Form.Field>
                                <label>{t('city')}</label>
                                <input
                                    type="text" 
                                    name="city"
                                    ref={register}
                                />
                                {/* <ErrorMessage errors={errors} as="p"/> */}
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('postal_code')}</label>
                                <input
                                    name="postalCode"
                                    ref={register({required: true})}
                                />
                            </Form.Field>
                            {errors.postalCode && <p as="p" className="red">This field is required</p>}
                            <Divider hidden/>
                            <Header as="h6" color="grey" textAlign="center">{t('terms_conditions')}</Header>
                            <Button.Group widths='2'>
                                <Button basic color='pink' as='a' onClick={RouteChangeBack}>{t('back')}</Button>
                                <Button color="pink" onClick={handleSubmit(RouteChangeNext)} type='submit'>{t('next')}</Button>
                            </Button.Group>
                        </Form>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    )
}

export default DetailsLocation 
