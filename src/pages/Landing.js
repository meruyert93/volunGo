import React from 'react'
import { Segment } from 'semantic-ui-react';
import Hero from '../components/Hero';
import Main from '../components/Main';
import AboutUs from "../components/AboutUs";


function Landing() {
    

    return (
        <Segment.Group>
            <Hero/>
            <Main/>
            <AboutUs/>
        </Segment.Group>
    )
}

export default Landing
