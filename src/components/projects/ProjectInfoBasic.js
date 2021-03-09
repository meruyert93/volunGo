import React from 'react';
import { Grid, Segment, Header, Button, Form, Progress, Divider, Checkbox} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";

function ProjectInfoBasic() {
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ UpdateProjectAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.ngoDetails
    });

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.UpdateProjectAction(data);
        let path = ``;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment  size='large' padded='very' className="height100">
            <Progress percent={33} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('about_project')}
                    </Header>
                    <p> {t('sub_text_about_project')}</p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={3}>
                        <Header>{t('basic_info')}</Header>
                        <Form>
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
                                    name="title"
                                    placeholder={t('contact_person')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('contact_info')}</label>
                                <input
                                    type="text" 
                                    name="contact_person"
                                    placeholder={t('contact_info')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('number_of_volunteers')}</label>
                                <input
                                    type="number" 
                                    name="number_of_volunteers"
                                    placeholder={t('number_of_volunteers')}
                                    ref={register({ required: true})} 
                                />                             
                            </Form.Field>
                            <Form.Field label={t('no_specify')} name='not_specified' control='input' type='checkbox'  ref={register({ required: true})}/>
                            <Grid.Row columns={1}>
                                <Grid.Column>
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

export default ProjectInfoBasic
