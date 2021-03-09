import React from 'react'
import { Grid, Segment, Header, Button, Form, Progress} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateNGOAction from "../../adapters/updateNGOAction";

function NGOSignUpAdd() {
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ updateNGOAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.ngoDetails
    });

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateNGOAction(data);
        let path = `sign-up2`;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={66} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('register_org')}
                    </Header>
                    <p> {t('sub_text_register_org')}</p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <Form>
                            <Form.Field>
                                <label>{t('name_org')}</label>
                                <input
                                    type="text" 
                                    name="name_org"
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>{t('about_org')}</label>
                                <textarea
                                    type="text" 
                                    name="about_org"
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>{t('url_org')}</label>
                                <input
                                    type="text" 
                                    name="url_org"
                                    ref={register({ required: true})}
                                    placeholder="https://" 
                                />
                            </Form.Field>
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

export default NGOSignUpAdd
