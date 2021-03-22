import React, { useState } from 'react';
import { Segment, Grid, Icon, Image, Menu, Button } from 'semantic-ui-react';
import { useHistory, useLocation } from "react-router-dom";

function HeaderBar({onToggleMenu}) {
    const [active, setActive] = useState('volunteers');
    const history = useHistory();
    const location = useLocation();

    const RouteChangeOrganization = () => {
        let path = `/organization`;
        setActive('organization')
        history.push(path);
    }

    const RouteChangeVolunteers = () => {
        let path = `/volunteers`;
        setActive('volunteers')
        history.push(path);
    }

    const RouteChangeHome = () => {
        let path = `/`;
        localStorage.removeItem('token')
        history.push(path);
    }

    const RouteSignIn = () => {
        if (location.pathname === '/' || location.pathname === '/volunteers') {
            let path = `volunteers-sign-in`;
            history.push(path)
        } else if (location.pathname === '/organization' ){
            let path = `ngo-sign-in`;
            history.push(path)
        }
    }

    let MenuComponent;

    if (localStorage.getItem('token')) {
        MenuComponent =            
        <Menu text className='mobileHide'>
            <Menu.Item as='a' onClick={() => RouteChangeHome()}>
                <Button basic color={active === 'volunteers' ? 'pink' : 'blue'}>Sign Out</Button>
            </Menu.Item>
        </Menu>
    } else {
        MenuComponent =            
        <Menu text className='mobileHide'>
            <Menu.Item as='a' onClick={() => RouteChangeVolunteers()} active={active === 'volunteers'}>
                Volunteers
            </Menu.Item>
            <Menu.Item as='a' onClick={() => RouteChangeOrganization()} active={active === 'organization'}>
                Organizations
            </Menu.Item>
            <Menu.Item as='a' onClick={() => RouteSignIn()}>
                <Button basic color={active === 'volunteers' ? 'pink' : 'blue'}>Sign in</Button>
            </Menu.Item>
        </Menu>
    }

    return (
        <Segment basic attached="top" vertical compact size='small'>
            <Grid container columns={2}>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column floated='left' mobile={7} tablet={4} computer={3}>
                        <Image src='/./images/Logomark.svg' href='https://volungo.netlify.app/' fluid/>
                    </Grid.Column>
                    <Grid.Column floated='right' mobile={1} tablet={4} computer={5}>
                        {MenuComponent}
                    </Grid.Column>
                    <Grid.Column floated='right' mobile={2} tablet={2} computer={2} className='largeScreenHide'>
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
