import React from 'react';
import { Grid, Segment, Header, Button, Form, Progress, Divider  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../adapters/updateAction";

function FormsAdd() {
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register, control, setValue } = useForm({
        defaultValues: state.yourDetails
    });

    const { t } = useTranslation();
    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    const history = useHistory();

    const handleOnChange = (e, data) => { setValue("gender", data.value); }

    const RouteChangeBack = () => {
        let path = `sign-up1`;
        history.push(path);
    }
    const RouteChangeNext = (data) => {
        actions.updateAction(data);
        let path = `details-location`;
        history.push(path);
        //console.log(data);
    }

    return (
        <Segment size='large' padded='very' className="height100">
        <Progress percent={66} attached='top' size='medium' color='pink'/>
        <Grid stackable columns={2} verticalAlign='middle' centered>
            <Grid.Column width={16} textAlign="center">
                <Header as="h6" color="grey">
                    {t('step2')}
                </Header>
            </Grid.Column>
            <Grid.Column width={16} textAlign="center">
                <Header  as='h2' className="headingText"> 
                    {t('about_you')}
                </Header>
            </Grid.Column>
            <Grid.Column width={16} textAlign="center">
                <Header as="h6" color="grey">
                    {t('sub_text_about_you')}
                </Header>
            </Grid.Column>
            <Grid.Row streched="true">
                <Grid.Column mobile={16} tablet={8} computer={3}>
                    <Form onSubmit={handleSubmit(RouteChangeNext)}>
                        <Form.Field required>
                            <label>{t('first_name')}</label>
                            <input
                                type="text"
                                name="firstName"
                                ref={register({ required: true, pattern: /^[A-Za-z]+$/i})}
                                placeholder={t('first_name_placeholder')}
                            />
                        </Form.Field>
                        {errors.firstName && <p as="p" className="red">This field is required</p>}
                        <Form.Field required>
                            <label>{t('last_name')}</label>
                            <input
                                type="text"
                                name="lastName"
                                ref={register({ required: true, pattern: /^[A-Za-z]+$/i})}
                                placeholder={t('last_name_placeholder')}
                            />
                        </Form.Field>
                        {errors.lastName && <p as="p" className="red">This field is required</p>}
                        <Form.Group widths='equal'>
                            <Form.Field required>
                                <label>{t('year_birth')}</label>
                                <input
                                    type="number"
                                    name="yearOfBirth"
                                    ref={register({ required: true})}
                                    placeholder={t('year_placeholder')}
                                />
                            </Form.Field>
                            {errors.lastName && <p as="p" className="red">This field is required</p>}
                            <Form.Field>
                                <label>{t('gender')}</label>
                                <Controller
                                    name="gender"
                                    control= {control}
                                    placeholder='Gender'
                                    render={ () => {
                                        return (
                                        <Form.Dropdown
                                        options={genderOptions} fluid selection onChange={handleOnChange}
                                        />
                                        )
                                    }}
                            />
                            </Form.Field>
                        </Form.Group>
                        <Divider hidden/>
                        <Button.Group widths='2'>
                            <Button basic color='pink' onClick={RouteChangeBack}>{t('back')}</Button>
                            <Button color='pink' onClick={handleSubmit(RouteChangeNext)} type='submit'>{t('next')}</Button>
                        </Button.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default FormsAdd
