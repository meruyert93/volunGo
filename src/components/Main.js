import React from 'react';
import { Grid, Segment, Header, Divider, Image } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function Main() {
    const { t } = useTranslation();

    return (
        <Segment size='large' padded='very' textAlign="center" className="backgroundDark">
            <Header  as='h3' className="textWhite"> 
                {t('why')}
            </Header>
            <Header as='h2' className="textWhite">
                {t('sub_text_why')}
            </Header>
            <Grid stackable columns={3} padded divided>
                <Grid.Row centered>
                    <Grid.Column width={5}  textAlign='center'>
                        <Divider hidden/>
                        <Image src="./images/heroSection/find.svg" centered/>
                        <Header as ="h4" className="textWhite">{t('opportunities')}</Header>
                        <p className="textWhite">{t('sub_text_opportunities')}</p>
                    </Grid.Column>
                    <Grid.Column  width={5}  textAlign='center'>
                        <Divider hidden/>
                        <Image src="./images/heroSection/find.svg" centered/>
                        <Header as ="h4" className="textWhite">{t('organizations')}</Header>
                        <p className="textWhite">{t('sub_text_organizations')}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    
                    <Grid.Column  mobile={16} tablet={8} computer={12}>
                    {/* <Icon name="line graph" color="blue"size="large"/>
                    <Header as ="h4">{t('impact')}</Header>
                    <p>{t('sub_text_impact')}</p> */}
                    <Divider hidden/>
                    <Image src="./images/heroSection/mockup.png" fluid/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Main
