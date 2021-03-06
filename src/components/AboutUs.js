import React from 'react';
import { Grid, Segment, Header, Divider, Image } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function AboutUs() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' textAlign="center">
            <Grid.Row >
                <Header  as='h3' color="grey"> 
                    {t('about_us')}
                </Header>
                <Header as='h2' className="headingText">
                    {t('sub_text_about_us')}
                </Header>
            </Grid.Row>
        </Segment>
    )
}

export default AboutUs
