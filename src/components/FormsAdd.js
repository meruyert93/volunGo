import React from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select  } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function FormsAdd() {
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
    const RouteChangeNext = () => {
        let path = `newPath`;
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'>
        <Grid stackable columns={2} verticalAlign='middle' centered>
            <Header  as='h3'> 
            {t('about_you')}
            </Header>
            <Grid.Row>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <label>{t('first_name')}</label>
                            <input/>
                        </Form.Field>
                        <Form.Field>
                            <label>{t('last_name')}</label>
                            <input/>
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>{t('year_birth')}</label>
                                <input/>
                            </Form.Field>
                            <Form.Field
            	                control={Select}
                                options={genderOptions}
                                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                                placeholder='Gender'
                                search
                                searchInput={{ id: 'form-select-control-gender' }}
                            />
                        </Form.Group>
                        <Button.Group widths='2'>
                            <Button basic color='blue' onClick={RouteChangeBack}>{t('back')}</Button>
                            <Button primary onClick={RouteChangeNext}>{t('next')}</Button>
                        </Button.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default FormsAdd
