import React from 'react';
import { Grid, Segment, Header, Button, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

function Error() {
  const history = useHistory();

  const backHome = () => {
    const path = '/';
    localStorage.removeItem('token');
    history.push(path);
  };
  return (
    <Segment size="large" padded="very">
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Image src="./images/noPage.png" fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={8} textAlign="center">
            <Header className="error-title">
              Oops! It seems something went wrong
            </Header>
            <p className="error-text">Please, try again</p>
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={8} textAlign="center">
            <Header color="grey" as="h4" className="error-text">
              Please, try again
            </Header>
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Button
              fluid
              className="btn btn-primary-volunteer"
              onClick={() => backHome()}
            >
              BACK HOME
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Error;
