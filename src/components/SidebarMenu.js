import React from 'react';
import { useHistory } from "react-router-dom";
import {
    Menu,
    Sidebar,
} from 'semantic-ui-react';


function SidebarMenu({visible, setVisible}) {
    const history = useHistory();

    const RouteChangeOrganization = () => {
        let path = `/organization`;
        history.push(path);
    }
    const RouteChangeVolunteers = () => {
        let path = `/volunteers`;
        history.push(path);
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
                <Menu.Item as='a'onClick={() => RouteChangeVolunteers()}>
                    Volunteers
                </Menu.Item>
                <Menu.Item as='a' onClick={() => RouteChangeOrganization()}>
                    Organizations
                </Menu.Item>
                <Menu.Item as='a'>
                    Sign in
                </Menu.Item>
            </Sidebar>
    )
}

export default SidebarMenu
