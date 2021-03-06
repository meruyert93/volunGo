import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

function Footer() {
    return (
        <Segment size='large' padded='very' attached="bottom" className="backgroundDark">
            <Grid textAlign='center'>
                <Grid.Column>
                    <Header as='h5' className="textWhite">VolunGO ©2021</Header>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Footer
