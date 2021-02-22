import React from 'react';
import {
    Icon,
    Menu,
    Sidebar,
  } from 'semantic-ui-react';

function SidebarMenu({visible, setVisible}) {
    
    return (
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={visible}
                onHide={() => setVisible(false)}
                direction='right'
                width='thin'
            >
            <Menu.Item as='a'>
                <Icon name='home' />
                    Home
            </Menu.Item>
            <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
            </Sidebar>
    )
}

export default SidebarMenu
