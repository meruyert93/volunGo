import React, { useState } from 'react';
import { Grid, Segment, Header, Divider, Image, Card, Icon } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import "../translations/i18n";

function ItemProject({id, image, name, organization, duration, days, time, place}) {
    const [active, setActive] = useState();

    const chosenHandler= (id) => {
        setActive(id);
        if (active) {
            setActive();
        }
    }
    return (
        <Grid.Column mobile={16} tablet={5} computer={5} stretched>
            <Card>
                <Image src={image} wrapped ui={false} className="imageCard"/>
                <Icon name="heart" size="big" className={active ? "redHeart iconSelect" : "whiteHeart iconSelect"} onClick={() => chosenHandler(id)}/>
                <Card.Content>
                    <Card.Header className="cardHeadingText">{name}</Card.Header>
                    <p className="red smallText">{organization}</p>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <p className="smallText">
                        <Icon name="calendar alternate outline" color="grey" />
                            {duration && "|" + duration } {days && "|" + days }  {time && "|" + time}
                        </p>
                    </Card.Meta>
                    <Card.Meta>
                        <p className="smallText">
                        <Icon name="map marker alternate" color="grey" />
                            {place}
                        </p>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ItemProject
