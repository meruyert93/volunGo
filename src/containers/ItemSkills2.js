import React, { useState } from 'react';
import { Grid, Segment, Image, Icon, Header } from 'semantic-ui-react';

function ItemSkillTwo ({id, name, image, toggleHandler}) {
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
            <Segment onClick={() => chosenHandler(id)} className={active ? 'VolunteerSecondaryBorder heightCard' : ' heightCard'}>
                <svg className={active ? 'iconSkillsVolunteersSelected iconSkills' : 'iconSkills'}>
                    <use  xlinkHref={image}></use>
                </svg>
                <Icon name="check circle" size="big" className={active ? "iconSelect VolunteerSecondaryColor" : "iconSelect whiteChecker"}/>
                <Grid className="textCardNGO">
                    <Header as="h6" textAlign="center" className={active ? 'VolunteerSecondaryColor' : 'grey60'}>{name}</Header>
                </Grid>
            </Segment>
        </Grid.Column>
    )
}

export default ItemSkillTwo
