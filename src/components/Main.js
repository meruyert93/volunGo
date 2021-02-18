import React from 'react';
import { Grid, Segment, Header, Container, Icon } from 'semantic-ui-react';


function Main() {
    return (
        <Segment size='large' padded='very' >
            <Header  as='h2'>
                Why VolunGO?
            </Header>
            <Grid stackable columns={3}>
                <Grid.Column width={5}>
                    <Icon name="search" color="blue"size="large"/>
                    <Header as ="h4">Find volunteer opportunities</Header>
                    <p>Find volunteer opportunities that fit you in your city or ways to help from home when you’re free.</p>
                </Grid.Column>
                <Grid.Column  width={5}>
                    <Icon name="group" color="blue"size="large"/>
                    <Header as ="h4">Join your local organizations</Header>
                    <p>Join your local organizations who provide volunteer opportunities that are suit to you.</p>
                </Grid.Column>
                <Grid.Column  width={5}>
                    <Icon name="line graph" color="blue"size="large"/>
                    <Header as ="h4">Track your impact</Header>
                    <p>See all your individual impact (volunteer hours and organizations) at a glance.</p>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Main
