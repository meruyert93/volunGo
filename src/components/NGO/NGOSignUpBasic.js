import React from 'react';
import { Grid, Segment, Header, Button, Form, Progress} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateNGOAction from "../../adapters/updateNGOAction";

function NGOSignUpBasic() {
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
        let path = `ngo-sign-up2`;
        history.push(path);
        //console.log(data)
    }

    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={33} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('account')}
                    </Header>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={3}>
                        <Form>
                            <Form.Field required>
                                <label>{t('email')}</label>
                                <input
                                    type="text" 
                                    name="email"
                                    placeholder={t('email')}
                                    ref={register({ required: true})} 
                                />
                            </Form.Field>
                            <Form.Field required>
                                    <label>{t('password')}</label>
                                    <input
                                        type="text"
                                        name="password"
                                        className="inputPassword"
                                        placeholder={t('password_placeholder')}
                                        ref={register({ required: true})}
                                    />
                            </Form.Field>
                            <Form.Field required>
                                    <label>{t('confirm_password')}</label>
                                    <input
                                        name="passwordConfirm"
                                        type="text"
                                        className="inputPassword"
                                        placeholder={t('confirm_password_placeholder')}
                                        ref={register({ required: true})}
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

export default NGOSignUpBasic
