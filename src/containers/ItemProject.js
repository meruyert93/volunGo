import React, { useState } from 'react';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
import '../translations/i18n';

function ItemProject({id, images, title, companyName, endDate, startDate, duration, weekdays, endTime, startTime, city, streetAddress, postalCode}) {
    
    const [active, setActive] = useState();

    const chosenHandler= (id) => {
        setActive(id);
        if (active) {
            setActive();
        }
        console.log(endDate);
        console.log(startDate);
    }

    const getDates = (endDate, startDate) => {
        let arrStartDate = startDate.split('T')[0].split('-');
        let arrEndDate = endDate.split('T')[0].split('-')
        let months = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        }
        return `${months[String(arrStartDate[1])]} ${arrStartDate[2]} - ${months[String(arrEndDate[1])]} ${arrEndDate[2]}`
    }

    return (
        <Grid.Column mobile={16} tablet={5} computer={5} stretched>
            <Card  onDoubleClick={() => chosenHandler(id)} className="projectCard">
                <Image src={images[0].original} wrapped ui={false} className="imageCard"/>
                <Icon name="heart" size="large" className={active ? "pinkChecker iconSelect" : "whiteChecker iconSelect"} onClick={() => chosenHandler(id)}/>
                <Card.Content>
                    <Card.Header className="cardHeadingText card-title">{title}</Card.Header>
                    <p className="textPrimary smallText card-organization">{companyName}</p>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <p className="smallText card-info">
                        <Icon name="calendar alternate outline" color="grey" />
                            {(endDate && startDate) && "|" + getDates(endDate, startDate) } {weekdays && "|" + weekdays }  {(endTime && startTime) && "|" + endTime + '-' + startTime}
                        </p>
                    </Card.Meta>
                    <Card.Meta>
                        <p className="smallText card-info">
                        <Icon name="map marker alternate" color="grey" />
                            {streetAddress + ', ' + postalCode + ' ' + city} 
                        </p>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ItemProject;
