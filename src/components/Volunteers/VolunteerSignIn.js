import React, { useState } from 'react';
import { Grid, Segment, Header, Button, Form, Progress, Divider, Image} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../adapters/updateAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function VolunteerSignIn() {
    const [passwordShown, setPasswordShown] = useState(false);
    const { state, actions } =  useStateMachine({ updateAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.yourDetails
    });

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
        // console.log('toggling')
    };

    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeSignUp = () => {
        let path = ``;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'>
            <Grid container>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign='middle'>
                        <Grid>
                            <Grid.Column width={16} textAlign="center">
                            </Grid.Column>
                            <Grid.Column width={16} textAlign="center">
                                <Header  as='h2' className="headingText"> 
                                    {t('sign_in_as_volunteer')}
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={16} textAlign="center">
                                <Header as="h6" color="grey">
                                {t('welcome_back_volunteer')}
                                </Header>
                            </Grid.Column>
                            <Grid.Row centered>
                                <Grid.Column mobile={16} tablet={8} computer={8}>
                                    <Form onSubmit={handleSubmit(RouteChangeSignUp)}>
                                    <Form.Field required>
                                        <label>{t('email')}</label>
                                        <input
                                            type="text" 
                                            name="email"
                                            placeholder={t('email_placeholder')}
                                        />
                                    </Form.Field>
                                    <Form.Field required>
                                        <label>{t('password')}</label>
                                        <input
                                        type={passwordShown ? "text" : "password"}
                                        name="password"
                                        ref={register({ required: "You must specify a password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must have at least 8 characters"
                                                    }
                                        })}
                                        className="inputPassword"
                                        placeholder={t('password_placeholder')}
                                    />
                                    <i key={1} onClick={togglePasswordVisiblity} className="iconEye5 iconEye">{eye}</i>
                                    </Form.Field>
                                    <Divider hidden/>
                                    <Button color='pink' onClick={handleSubmit(RouteChangeSignUp)} type='submit'>{t('sign_in_btn')}</Button>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8} only='computer tablet'>
                        <Image src="./images/VolunteersSignIn.png" size="large" rounded/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default VolunteerSignIn

