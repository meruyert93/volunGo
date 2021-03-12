import React, { useState } from 'react'
import { Grid, Segment, Header, Button, Form, Progress, Divider} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProjectLocation({activPicker}) {
    const [radio, setRadio] = useState('');
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ UpdateProjectAction });
    const { handleSubmit, errors, register, watch, control, setValue } = useForm({
        defaultValues: state.projects
    });

    const weekOptions = [
        { key: 'mon', text: 'Mon', value: 'Mon' },
        { key: 'tue', text: 'Tue', value: 'Tue' },
        { key: 'wed', text: 'Wed', value: 'Wed' },
        { key: 'thu', text: 'Thu', value: 'Thu' },
        { key: 'fri', text: 'Fri', value: 'Fri' },
        { key: 'sat', text: 'Sat', value: 'Sat' },
        { key: 'sun', text: 'Sun', value: 'Sun' },
    ]

    const timeOptions = [
        { key: '7', text: '', value: '' },
        { key: '8', text: '8:00', value: '8:00' },
        { key: '9', text: '9:00', value: '9:00' },
        { key: '10', text: '10:00', value: '11:00'},
        { key: '11', text: '11:00', value: '11:00' },
        { key: '12', text: '12:00', value: '12:00' },
        { key: '13', text: '13:00', value: '13:00' },
        { key: '14', text: '14:00', value: '14:00' },
        { key: '15', text: '15:00', value: '15:00' },
        { key: '16', text: '16:00', value: '16:00' },
        { key: '17', text: '17:00', value: '17:00' },
        { key: '18', text: '18:00', value: '18:00' },
        { key: '19', text: '19:00', value: '19:00' },
        { key: '20', text: '20:00', value: '20:00' },
    ]

    const handleOnChange = (e, data) => { setValue("weekdays", data.value); }
    const startTimeOnChange = (e, data) => { setValue("startTime", data.value); }
    const endTimeOnChange = (e, data) => { setValue("endTime", data.value); }

    const RouteChangeBack = () => {
        activPicker(1);
        //let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.UpdateProjectAction(data);
        activPicker(3);
        //let path = ``;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment basic size="large" padded="very">
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('location_time_info')}
                    </Header>
                    <p> {t('sub_text_location_time_info')}</p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <Form>
                            <Header>{t('location_info_project')}</Header>
                            <Form.Field required>
                                <label>{t('company_name')}</label>
                                <input
                                    type="text" 
                                    name="companyName"
                                    placeholder={t('location_project_placeholder')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('address_1')}</label>
                                <input
                                    type="text" 
                                    name="addressOne"
                                    placeholder={t('location_project_placeholder')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Group>
                                <Form.Field required>
                                    <label>{t('city_project')}</label>
                                    <input
                                        type="text" 
                                        name="city"
                                        placeholder={t('location_project_placeholder')}
                                        ref={register({ required: true})} 
                                    />
                                </Form.Field>
                                <Form.Field required>
                                    <label>{t('postalCode_project')}</label>
                                    <input
                                        type="text" 
                                        name="postalCode"
                                        placeholder={t('location_project_placeholder')}
                                        ref={register({ required: true})} 
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Header>{t('time_info')}</Header>
                            <Form.Group>
                                <Form.Field>
                                    <label>{t('starting_date')}</label>
                                    <Controller
                                        name="startDate"
                                        control= {control}
                                        render={ ({value, onChange}) => {
                                            return (
                                                <DatePicker
                                                    selected={value} 
                                                    onChange={onChange}
                                                />
                                            )
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>{t('ending_date')}</label>
                                    <Controller
                                        name="endDate"
                                        control= {control}
                                        render={ ({value, onChange}) => {
                                            return (
                                                <DatePicker
                                                    selected={value} 
                                                    onChange={onChange} />
                                            )
                                        }}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <label>{t('weekdays')}</label>
                                <Controller
                                    name="weekdays"
                                    control= {control}
                                    placeholder='weekdays'
                                    render={ () => {
                                        return (
                                        <Form.Dropdown
                                            options={weekOptions} 
                                            fluid selection multiple search 
                                            onChange={handleOnChange}
                                        />
                                        )
                                    }}
                            />
                            </Form.Field>
                            <Form.Group>
                                <Form.Field>
                                    <label>{t('starting_time')}</label>
                                    <Controller
                                        name="startTime"
                                        control= {control}
                                        render={ () => {
                                            return (
                                            <Form.Dropdown
                                                options={timeOptions} 
                                                selection 
                                                onChange={startTimeOnChange}
                                            />
                                            )
                                        }}
                                />
                                </Form.Field>
                                <Form.Field>
                                    <label>{t('ending_time')}</label>
                                    <Controller
                                        name="endTime"
                                        control= {control}
                                        render={ () => {
                                            return (
                                            <Form.Dropdown
                                                options={timeOptions} 
                                                selection 
                                                onChange={endTimeOnChange}
                                            />
                                            )
                                        }}
                                />
                                </Form.Field>
                            </Form.Group>
                            <Form.Field label={t('no_specify')} name='not_specified' control='input' type='checkbox' />
                        
                            <Grid.Row>
                                <Grid.Column>
                                    <Divider hidden/>
                                    <Button color="blue" onClick={RouteChangeBack}>{t('back')}</Button>
                                    <Button primary onClick={handleSubmit(RouteChangeNext)}>{t('next')}</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Form>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ProjectLocation
