import React from 'react'
import { Grid, Segment, Header, Button } from 'semantic-ui-react';

function Hero() {
    return (
        <Segment size='large' padded='very' className="hero-section" color="blue" raised>
            <Grid container>
                <Grid.Row floated='left'>
                    <Grid.Column width={16}>
                        <Header as='h1'>
                        Find the best volunteer opportunities
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row floated='left'>
                    <Grid.Column>
                        <Button secondary>Get Started</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Hero
