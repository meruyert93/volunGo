import React from 'react';
import { Segment, Header, Grid, Icon, Image } from 'semantic-ui-react';

function HeaderBar({onToggleMenu}) {
    
    return (
        <Segment basic attached="top" vertical compact size='small'>
            <Grid container columns={3}>
                <Grid.Row>
                    <Grid.Column floated='left' width={3}>
                        <Image src='./images/Logo.png' />
                    </Grid.Column>
                    {/* <Grid.Column floated='left' width={11}>
                        <Header as='h1'>VolunGO</Header>
                    </Grid.Column> */}
                    <Grid.Column floated='right' width={2}>
                        <Icon 
                            link 
                            name="sidebar" 
                            size="big"
                            onClick={() => onToggleMenu()}
                            
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default HeaderBar
