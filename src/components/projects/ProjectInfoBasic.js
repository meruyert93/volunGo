import React, { useState } from 'react';
import { Grid, Segment, Header, Button, Form, Progress, Divider} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function ProjectInfoBasic({activPicker}) {
    const [radio, setRadio] = useState('');
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ UpdateProjectAction });
    const { handleSubmit, errors, register, watch, control, setValue } = useForm({
        defaultValues: state.projects
    });

    const history = useHistory();

    const radioOnChange = () => {
        setRadio((radio === "offline" || radio === '') ? "online" : "offline");
        setValue("locationType", radio)}

    const RouteChangeBack = () => {
        let path = `ngo-projects-dashboard`;
        history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.UpdateProjectAction(data);
        activPicker(2)
    }

    return (
        <Segment basic size='large' padded='very'>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('about_project')}
                    </Header>
                    <p> {t('sub_text_about_project')}</p>
                </Grid.Column>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <Form enctype="multipart/form-data">
                            <Header>{t('basic_info')}</Header>
                            <Form.Field required>
                                <label>{t('project_title')}</label>
                                <input
                                    type="text" 
                                    name="title"
                                    placeholder={t('project_title')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('contact_person')}</label>
                                <input
                                    type="text" 
                                    name="contactPersonName"
                                    placeholder={t('contact_person')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('contact_info')}</label>
                                <input
                                    type="text" 
                                    name="contactPersonEmail"
                                    placeholder={t('contact_info')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>{t('number_of_volunteers')}</label>
                                <input
                                    type="number" 
                                    name="numberOfVolunteers"
                                    placeholder={t('number_of_volunteers')}
                                    ref={register} 
                                />                             
                            </Form.Field>
                            <Form.Field label={t('no_specify')} name='not_specified' control='input' type='checkbox' />
                            <Form.Group grouped>
                                <label>{t('online_or_offline')}</label>
                                <Controller
                                    name="locationType"
                                    control= {control}
                                    render={() => {
                                        return(
                                            <Form.Radio
                                                label={t('offline')}
                                                value='offline'
                                                checked={radio === ('online' || '')}
                                                onChange={()=> {radioOnChange()}}
                                            />
                                        )
                                    }}
                                />
                                <Controller
                                    name="locationType"
                                    control= {control}
                                    render={() => {
                                        return(
                                            <Form.Radio
                                                label={t('online')}
                                                value='online'
                                                checked={radio === ('offline' || '')}
                                                onChange={()=> {radioOnChange()}}
                                            />
                                        )
                                    }}
                                />
                            </Form.Group>
                            <Grid centered>
                                <Grid.Column className="flexJustifyContent">
                                    <Divider hidden/>
                                    <Button basic color="blue" onClick={RouteChangeBack}>{t('back')}</Button>
                                    <Button primary onClick={handleSubmit(RouteChangeNext)}>{t('next')}</Button>
                                </Grid.Column>
                            </Grid>
                        </Form>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ProjectInfoBasic
