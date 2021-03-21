import React from 'react'
import { Grid, Segment, Header, Button, Form, Progress} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateNGOAction from "../../adapters/updateNGOAction";
import { ngoSignUp } from "../../adapters/ngoAPI";

function NGOSignUpAdd() {
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ updateNGOAction });
    const { handleSubmit, register } = useForm({
        defaultValues: state.ngoDetails
    });

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `ngo-sign-up1`;
        history.push(path);
    }

    const RouteChangeNext = async (data) => {
        actions.updateNGOAction(data);
        let path = `/ngo-projects-dashboard`;

        const response  = await ngoSignUp(JSON.stringify(state.ngoDetails));
        //console.log(JSON.stringify(state.ngoDetails, null, 2))
        if (response.status ===  'success') {
            const TOKEN = response.token;
            localStorage.setItem('token', TOKEN);
            return history.push(path);
        }
        return history.push('error');
    }

    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={100} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
            <Grid.Column width={16} textAlign="center">
                    <Header as="h6" color="grey">
                            {t('stepTwo')}
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('register_org')}
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                    <Header as="h4" color="grey">
                    {t('sub_text_register_org')}
                    </Header>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <Form>
                            <Form.Field required>
                                <label>{t('name_org')}</label>
                                <input
                                    type="text" 
                                    name="name"
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('about_org')}</label>
                                <textarea
                                    type="text" 
                                    name="description"
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                <label>{t('url_org')}</label>
                                <input
                                    type="text" 
                                    name="websiteUrl"
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
