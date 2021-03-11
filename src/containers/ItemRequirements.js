import React, { useState } from 'react'
import { Grid, Header, Icon,  Image, Card, Segment, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

function ItemRequirements({id, name, image, toggleHandler}) {
    const [active, setActive] = useState();

    const chosenHandler= (id) => {
        toggleHandler(id)
        setActive(id);
        if (active) {
            setActive();
        }
    }

    return (
        <Grid.Column>
            <Segment onClick={() => chosenHandler(id)} className={active ? "ngoSecondaryBorder heightCard" : "heightCard"} >
                {/* <Image src={image} size='mini' className="imageCard iconSkills" centered/>    */}
                    <svg className={active ? 'iconSkillsSelected iconSkills' : 'iconSkills'}>
                    <use  xlinkHref={image}></use>
                    </svg>
                <Icon name="check circle" size="big" className={active ? "iconSelect ngoSecondaryColorPicker" : "iconSelect whiteChecker"}/>
                <Grid className="textCardNGO">
                    <Header as="h5" textAlign="center" className={active ? 'ngoSecondaryColorPicker' : 'grey60'}>{name}</Header>
                </Grid>
            </Segment>
        </Grid.Column>
    )
}

export default ItemRequirements
