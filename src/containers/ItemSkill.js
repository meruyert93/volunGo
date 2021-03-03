import React from 'react';
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Image, Container, Placeholder, Rail  } from 'semantic-ui-react';

function ItemSkill({id, name, image}) {
    return (
        <Grid.Column mobile={8} tablet={5} computer={2} stretched>
            <Segment color='grey' inverted>
                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column floated='right'>
                            <Image src={image} floated='right'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Container>
                            <p>{name}</p>
                        </Container>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Grid.Column>
    )
}

export default ItemSkill
