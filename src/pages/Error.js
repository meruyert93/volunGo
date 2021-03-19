import React from 'react';
import { Grid, Segment, Header,  Button, Image, Divider  } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";


function Error() {
    return (
        <Segment size='large' padded='very'>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Image src='./images/noPage.png' fluid />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={8} textAlign='center'>
                        <Header color='pink'>Oops! Page not found</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={8} textAlign='center'>
                        <Header color='grey' as='h4'>Sorry, we can’t find the page you are looking for. </Header>
                    </Grid.Column>    
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={2} >
                        <Button fluid color='pink'>BACK HOME</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Error
