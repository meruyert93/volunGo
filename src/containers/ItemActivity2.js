import React, { useState } from 'react';
import { Grid, Header, Icon, Image, Card } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function ItemActivity2({ id, name, image2, toggleHandler }) {
  const [active, setActive] = useState();

  const chosenHandler = (id) => {
    toggleHandler(id);
    setActive(id);
    if (active) {
      setActive();
    }
  };
  const { t } = useTranslation();

  return (
    // <Grid.Column mobile={8} tablet={5} computer={4}>
    <Grid.Column mobile={16} tablet={8} computer={3}>
      <Card
        onClick={() => chosenHandler(id)}
        className={`${active && 'imageSelect'} item-activity`}
      >
        <Image
          src={image2}
          rounded
          className="imageCard overlayImage item-activity__image"
        />
        <Icon
          name="check circle"
          size="large"
          className={`${
            active ? 'iconSelect pinkChecker' : 'iconSelect whiteChecker'
          } item-activity__check`}
        />
        <Grid className="textCard">
          <Header className="textWhite item-activity__text">{name}</Header>
        </Grid>
      </Card>
      {/* <Segment  inverted size='big' onClick={() => chosenHandler(id)} className={active ? 'itemPicker' : 'itemDefault'}>
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
            </Segment> */}
    </Grid.Column>
  );
}

export default ItemActivity2;
