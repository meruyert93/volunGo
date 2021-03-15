import React, { useRef, useState } from 'react';
import { Grid, Segment, Header, Button, Form, Progress} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateNGOAction from "../../adapters/updateNGOAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function NGOSignUpBasic() {
    const [passwordShown, setPasswordShown] = useState(false);
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ updateNGOAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.ngoDetails
    });

    const password = useRef({});
    password.current = watch("password", "");

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
        // console.log('toggling')
      };


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
            <Progress percent={50} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header as="h6" color="grey">
                            {t('stepOne')}
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('account')}
                    </Header>
                </Grid.Column>
                <Grid.Column width={16} textAlign="center">
                    <Header as="h4" color="grey">
                        {t('sub_text_account')}
                    </Header>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
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
                            {errors.email && <p as="p" className="red">Your must specify an email</p>}
                            <Form.Field required>
                                    <label>{t('password')}</label>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        name="password"
                                        className="inputPassword"
                                        placeholder={t('password_placeholder')}
                                        ref={register({ required: "You must specify a password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must have at least 8 characters"
                                                    }
                                        })}
                                    />
                                    <i key={1} onClick={togglePasswordVisiblity} className="iconEye3 iconEye:">{eye}</i>
                            </Form.Field>
                            {errors.password && <p as="p" className="red">{errors.password.message}</p>}
                            <Form.Field required>
                                    <label>{t('confirm_password')}</label>
                                    <input
                                        name="passwordConfirm"
                                        type={passwordShown ? "text" : "password"}
                                        className="inputPassword"
                                        placeholder={t('confirm_password_placeholder')}
                                        ref={register({ validate: value =>
                                            value === password.current || "The passwords do not match"
                                        })}
                                    />
                                    <i key={2} onClick={togglePasswordVisiblity} className="iconEye4 iconEye">{eye}</i>
                            </Form.Field>
                            {errors.passwordConfirm && <p as="p" className="red">{errors.passwordConfirm.message}</p>}
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
