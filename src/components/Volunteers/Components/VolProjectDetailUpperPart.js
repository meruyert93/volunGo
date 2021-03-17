import React from 'react';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

function VolProjectDetailUpperPart({id, image, name, organization, content}) {
    return (
        <Segment size='large' padded='very'>
            <Grid centered >
                <Grid.Column mobile={16} tablet={10} computer={10}>
                    <Image src={image} fluid/>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={10} computer={10} textAlign='center'>
                    <Header>{name}</Header>
                    <p className="textPrimary">{organization}</p>
                    <p>{content}</p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default VolProjectDetailUpperPart
