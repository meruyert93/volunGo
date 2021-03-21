import React from 'react';
import { Grid, Segment, Header,  Button, Image } from 'semantic-ui-react';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";



function Error() {
    const history = useHistory();

    const backHome = () => {
        const path = '/';
        history.push(path);
    }
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
                        <Header color='pink'>Oops! It seems something went wrong</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={8} textAlign='center'>
                        <Header color='grey' as='h4'>Please, try again</Header>
                    </Grid.Column>    
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column mobile={16} tablet={8} computer={4} >
                        <Button fluid color='pink' onClick={() => backHome()}>BACK HOME</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Error
