import React from 'react';
import { Grid, Segment, Header, Button, Divider, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NGOHero() {
    const { t } = useTranslation();

    const history = useHistory();

    const RouteChangeSignUp = () => {
        let path = `/ngo-sign-up1`;
        history.push(path);
    }

    return (
    <Segment size='large' padded='very' raised>
        <Grid container>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign='middle'>
                    <Header as='h1' className="NGOtextDark">
                    {t('match_volunteers')}
                    </Header>
                    <p>{t('sub_text_match_volunteers')}</p>
                    <Divider hidden/>
                    <Button primary onClick={() =>  {RouteChangeSignUp()}}>{t('join_as_org')}</Button>
                </Grid.Column>
                <Grid.Column width={8} only='computer tablet'>
                    <Image src="./images/heroSection/heroNGO.jpg" size="large" rounded/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default NGOHero
