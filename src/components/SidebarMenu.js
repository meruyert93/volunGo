import React from 'react';
import {
    Icon,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react';
  import Hero from './Hero';
  import Main from './Main';

function SidebarMenu({visible, setVisible}) {
    
    return (
            <Sidebar.Pushable>
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
                <Sidebar.Pusher dimmed={visible}>
                    <Segment.Group piled>
                        <Hero/>
                        <Main/>
                    </Segment.Group>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
    )
}

export default SidebarMenu
