import React from 'react';
import { Grid, Segment, Header, Button, Progress } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ItemProject from "../../containers/ItemProject";

function NGOProjects({dataProjects}) {

    const { t } = useTranslation();

    const history = useHistory();

    return (
        <Segment size='large' padded='very'>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('ngo_your_projects')}
                    </Header>
                </Grid.Column>
                <Grid centered>
                {dataProjects.map((project) => {
                    return (
                    <ItemProject key={project.id} {...project}/>
                    )
                    })}
                </Grid>
            </Grid>
        </Segment>
    )
}

export default NGOProjects
