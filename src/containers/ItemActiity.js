import React from 'react'
import { Grid, Segment, Header, Icon, Button, Checkbox, Form, Image, Container  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

function ItemActivity({id, name, image}) {
    const { t } = useTranslation();

    return (
        <Grid.Column mobile={16} tablet={8} computer={5}>
            <Segment color='grey' inverted size='big'>
                <Grid columns={2} relaxed>
                <Grid.Row stretched>
                    <Grid.Column  floated='left' width={2}>
                        <Container fluid text textAlign='left'>
                            <p>{name}</p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column  floated='right' width={10}>
                        <Image src={image} fluid floated='right'/>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </Grid.Column>
    )
}

export default ItemActivity;
