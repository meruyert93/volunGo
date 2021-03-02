import React from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Select  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

function DetailsLocation () {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very'>
            <Grid>
            <Header  as='h2'> 
            {t('location_info')}
            </Header>
            <Header as ='h5'>
            {t('sub_text_location_info')}
            </Header>
            <Grid.Row streched>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <label>{t('city')}</label>
                                <input 
                                    
                                    
                                />
                                {/* <ErrorMessage errors={errors} as="p"/> */}
                            </Form.Field>
                            <Form.Field>
                                <label>{t('postal_code')}</label>
                                <input
                                    
                                    
                                />
                            </Form.Field>
                            <Button.Group widths='2'>
                                {/* <Button basic color='blue' as='a' onClick={() => {}}>{t('back')}</Button> */}
                                <Button primary onClick={() => {}} type='submit'>{t('next')}</Button>
                            </Button.Group>
                        </Form>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    )
}

export default DetailsLocation 
