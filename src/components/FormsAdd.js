import React, { useEffect } from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

function FormsAdd() {
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register, control } = useForm({
        defaultValues: state.yourDetails
    });

    const { t } = useTranslation();
    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `sign-up1`;
        history.push(path);
    }
    const RouteChangeNext = (data) => {
        actions.updateAction(data);
        let path = `details-location`;
        history.push(path);
        console.log(data);
    }

    return (
        <Segment size='large' padded='very'>
        <Grid stackable columns={2} verticalAlign='middle' centered>
            <Header  as='h3'> 
            {t('about_you')}
            </Header>
            <Grid.Row>
                <Grid.Column>
                    <Form onSubmit={handleSubmit(RouteChangeNext)}>
                        <Form.Field>
                            <label>{t('first_name')}</label>
                            <input
                                name="firstName"
                                ref={register({ required: "This is required"})}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>{t('last_name')}</label>
                            <input
                                name="lastName"
                                ref={register({ required: "This is required"})}
                            />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>{t('year_birth')}</label>
                                <input
                                    name="yearOfBirth"
                                    ref={register({ required: "This is required"})}
                                />
                            </Form.Field>
                            <Controller
                                as={<Form.Field control={Select}/>}
                                name="gender"
                                control= {control}
                                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                                searchInput={{ id: 'form-select-control-gender' }}
                                search
                                placeholder='Gender'
                                options={genderOptions}
                                defaultValue=""
                                render={ ({Select, onChange, onBlur, value, name, ref }) => {
                                    return (
                                    <Form.Field
            	                    control={Select}
                                    />
                                    )
                                }}
                            />
                        </Form.Group>
                        <Button.Group widths='2'>
                            <Button basic color='blue' onClick={RouteChangeBack}>{t('back')}</Button>
                            <Button primary onClick={handleSubmit(RouteChangeNext)} type='submit'>{t('next')}</Button>
                        </Button.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default FormsAdd
