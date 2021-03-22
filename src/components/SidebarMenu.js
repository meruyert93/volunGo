import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {
    Menu,
    Sidebar,
    Button
} from 'semantic-ui-react';


function SidebarMenu({visible, setVisible}) {
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
            <Menu text vertical fluid size='huge'>
                <Menu.Item as='a' onClick={() => RouteChangeHome()}>
                    <Button basic color={active === 'volunteers' ? 'pink' : 'blue'}>Sign Out</Button>
                </Menu.Item>
            </Menu>
    } else {
        MenuComponent =            
            <Menu text vertical fluid size='huge'>
                <Menu.Item as='a'onClick={() => RouteChangeVolunteers()}>
                    Volunteers
                </Menu.Item>
                <Menu.Item as='a' onClick={() => RouteChangeOrganization()}>
                    Organizations
                </Menu.Item>
                <Menu.Item as='a' onClick={() => RouteSignIn()}>
                    <Button basic color={active === 'volunteers' ? 'pink' : 'blue'}>Sign in</Button>
                </Menu.Item>
            </Menu>
    }
    
    return (
            <Sidebar
                as={Menu}               
                animation='overlay'
                icon='labeled'
                vertical
                visible={visible}
                onHide={() => setVisible(false)}
                direction='top'
                width='thin'
            >   
            {MenuComponent}
            </Sidebar>
    )
}

export default SidebarMenu
