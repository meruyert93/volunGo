import React from 'react';
import {

    Menu,
    Sidebar,
  } from 'semantic-ui-react';

function SidebarMenu({visible, setVisible}) {
    
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
                <Menu.Item as='a'>
                    Volunteers
                </Menu.Item>
                <Menu.Item as='a'>
                    Organizations
                </Menu.Item>
                <Menu.Item as='a'>
                    Sign in
                </Menu.Item>
            </Sidebar>
    )
}

export default SidebarMenu
