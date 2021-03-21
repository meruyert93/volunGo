import React, { useState } from 'react';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import "../translations/i18n";

function ItemProject({id, images, title, companyName, endDate, startDate, duration, weekdays, endTime, startTime, city, streetAddress, postalCode}) {
    
    const [active, setActive] = useState();

    const chosenHandler= (id) => {
        setActive(id);
        if (active) {
            setActive();
        }
    }
    return (
        <Grid.Column mobile={16} tablet={16} computer={16} stretched>
            <Card  onDoubleClick={() => chosenHandler(id)} className="projectCard">
                <Image src={images} wrapped ui={false} className="imageCard"/>
                <Icon name="heart" size="big" className={active ? "pinkChecker iconSelect" : "whiteChecker iconSelect"} onClick={() => chosenHandler(id)}/>
                <Card.Content>
                    <Card.Header className="cardHeadingText">{title}</Card.Header>
                    <p className="textPrimary smallText">{companyName}</p>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <p className="smallText">
                        <Icon name="calendar alternate outline" color="grey" />
                            {duration && "|" + duration } {weekdays && "|" + weekdays }  {(endTime && startTime) && "|" + endTime + '-' + startTime}
                        </p>
                    </Card.Meta>
                    <Card.Meta>
                        <p className="smallText">
                        <Icon name="map marker alternate" color="grey" />
                            {streetAddress + ', ' + postalCode + '' + city} 
                        </p>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ItemProject
