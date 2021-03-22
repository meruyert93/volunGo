import React, { useState } from 'react';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

function ItemYourProjects({id, image, name, organization, duration, days, time, place, displayDetailedProject }) {
    const [active, setActive] = useState();

    const { t } = useTranslation();

    return (
        <Grid.Column mobile={16} tablet={5} computer={5} stretched>
            <Card  onClick={() => {}} className="projectCard">
                <Card.Content>
                    <Card.Header className="cardHeadingText">{name} </Card.Header>
                    <p className="textPrimary smallText">{organization}</p>
                </Card.Content>
                <Card.Content>
                    <Button color='yellow'>{t('pending')}</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default ItemYourProjects;