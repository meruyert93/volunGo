import React from 'react';
import { Grid, Segment, Header, Image, Divider } from 'semantic-ui-react';

function Footer() {
    return (
        <Segment size='large' padded='very' attached="bottom" inverted>
            <Grid textAlign='center' verticalAlign='middle' stackable>
                    <Grid.Column width={3}> 
                        <Grid.Row className="flexSpaceEvenly">
                            <Grid.Column>
                                <p className="textWhite">Private Policy</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p className="textWhite">Term</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Grid.Row className="flexCenter">
                            <Grid.Column>
                                <Image src="/./images/Logo.svg" centered/>
                            </Grid.Column>
                            <Grid.Column >
                                <Header as="h2" className="textWhite">VolunGO</Header>
                            </Grid.Column>
                        </Grid.Row> 
                        <Grid.Row>
                            <Grid.Column>
                                <Divider hidden/>
                                <Header as='h5' className="textWhite"> © 2021 VolunGO. All rights reserved</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Grid.Row className="flexSpaceEvenly">
                            <Grid.Column>
                                <Image src="/./images/footer/Email.svg" centered/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src="/./images/footer/Instagram.svg" centered/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Footer
