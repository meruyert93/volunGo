import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import ItemProject from '../../containers/ItemProject';

function NGOProjects({ projects }) {
  const { t } = useTranslation();

  return (
    <Segment basic size="large" padded="very" style={{ paddingTop: '0' }}>
      {/* <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('ngo_your_projects')}
                    </Header>
                </Grid.Column>
            </Grid> */}
      <Grid>
        {projects.map((project) => {
          return <ItemProject key={project._id} {...project} />;
        })}
      </Grid>
    </Segment>
  );
}

export default NGOProjects;
