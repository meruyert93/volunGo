import React from 'react';
import { Grid, Segment, Image, Container, Card, Divider, Icon   } from 'semantic-ui-react';

function ItemVolunteer({id, image, name, projects, skill1, skill2, skill3}) {
    return (
        <Grid.Column>
            <Card>
                <Image src={image}/>
                <Card.Content  textAlign="center">
                    <Card.Header>{name}</Card.Header>
                </Card.Content>
                <Card.Content textAlign="center">
                    <p><span className="ngoSecondaryColorPicker">{projects}</span> Projects</p>
                    <Divider/>
                    <Icon name="check" className="ngoSecondaryColorPicker"/>
                    <span>{skill1}</span>
                    <Divider/>
                    <Icon name="check" className="ngoSecondaryColorPicker"/>
                    <span>{skill2}</span>
                    <Divider/>
                    <Icon name="check" className="ngoSecondaryColorPicker"/>
                    <span>{skill3}</span>
                </Card.Content>

            </Card>
        </Grid.Column>
    )
}

export default ItemVolunteer
