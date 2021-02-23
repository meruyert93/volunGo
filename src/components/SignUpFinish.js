import React from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Image, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function SignUpFinish() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very'>
            <Grid stackable columns={1} verticalAlign='middle' centered>
                <Header  as='h2'> 
                {t('congratulation')}
                </Header>
                <Grid.Row centered >
                    <Grid.Column computer={6} textAlign="center">
                        <Image src='./images/celebration.svg' fluid size="large"/>
                        <Header as='h3'>
                        {t('personalize')}
                    </Header>
                    <p>{t('sub_text_personalize')}</p>
                    <Button fluid primary>{t('complete_profile')}</Button>
                    <Divider hidden />
                    <Button fluid basic color='blue'>{t('skip_now')}</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default SignUpFinish
