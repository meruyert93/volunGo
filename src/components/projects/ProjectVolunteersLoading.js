import React from 'react';
import { Grid, Segment, Header, Loader} from 'semantic-ui-react';
import { useTranslation } from "react-i18next";


function ProlectVolunteersLoading() {
    const { t } = useTranslation();

    return (
        <Segment basic size='large' padded='very' className="height100">
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Row centered>
                    <Grid.Column textAlign="center">
                        <Header color="grey">{t('loading_volunteers')}</Header>
                        <Loader active inline='centered' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ProlectVolunteersLoading