import React from 'react'
import { Segment } from 'semantic-ui-react';
import Hero from '../components/Hero';
import Main from '../components/Main';


function Home({visible, setVisible}) {
    

    return (
        <Segment.Group>
            <Hero/>
            <Main/>
        </Segment.Group>
    )
}

export default Home
