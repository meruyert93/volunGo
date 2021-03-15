import React from 'react';
import { Segment, Header, Grid, Icon, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

function Temporary() {
    return (
        <Segment size='large' padded='very' className="height100">
            <Grid container verticalAlign='middle'>
                <Grid.Column textAlign="center">
                    <Header color="blue">
                        Thanks a lot for adding your project!
                    </Header>
                    <Header>
                        We hope for your understanding :)
                    </Header>
                </Grid.Column>
            </Grid>
            <Grid container verticalAlign='middle'>
                <Image src='./images/construction.jpg' centered/>
            </Grid>
        </Segment>
    )
}

export default Temporary
