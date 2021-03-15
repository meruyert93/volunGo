import React, { useState } from 'react';
import { Grid, Segment, Image, Container } from 'semantic-ui-react';

function ItemSkill({id, name, image, toggleHandler}) {
    const [active, setActive] = useState();

    const chosenHandler = (id) =>{
        toggleHandler(id);
        setActive(id);
        if (active) {
            setActive();
        }
    }

    return (
        <Grid.Column mobile={8} tablet={5} computer={2} stretched>
            <Segment inverted onClick={() => chosenHandler(id)} className={active ? 'itemPicker' : 'itemDefault'}>
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
