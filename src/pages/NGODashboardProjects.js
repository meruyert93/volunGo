import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

function NGODashboardProjects() {

    const { t } = useTranslation();

    const history = useHistory();

    return (
        <Segment.Group>
            <Segment basic size='large' padded='very'>
                <Grid padded='horizontally'>
                    <Grid.Column floated="left" width={10}>
                        <Header>{t('ongoing_upcoming_projects')}</Header>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button primary>{t('add_new_project')}</Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
}

export default NGODashboardProjects
