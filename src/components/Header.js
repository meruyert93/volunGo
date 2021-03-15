import React from 'react';
import { Segment, Header, Grid, Icon, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

function HeaderBar({onToggleMenu}) {
    
    const RouteChangeBack = () => {
        let path = `/`;
        history.push(path);
    }

    const history = useHistory();
    
    return (
        <Segment basic attached="top" vertical compact size='small'>
            <Grid container columns={3}>
                <Grid.Row>
                    <Grid.Column floated='left' mobile={8} tablet={4} computer={3}>
                        <Image src='./images/Logomark.svg' href='https://volungo.netlify.app/' />
                    </Grid.Column>
                    {/* <Grid.Column floated='left' width={11}>
                        <Header as='h1'>VolunGO</Header>
                    </Grid.Column> */}
                    <Grid.Column floated='right' mobile={3} tablet={2} computer={2}>
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
