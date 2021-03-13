import React from 'react';
import { Segment } from 'semantic-ui-react';
import NGOHero from "../components/NGO/NGOHero";
import NGOMain from "../components/NGO/NGOMain";
import AboutUs from "../components/AboutUs";

function LandingNGO() {
    return (
        <Segment.Group>
            <NGOHero/>
            <NGOMain/>
            <AboutUs/>
        </Segment.Group>
    )
}

export default LandingNGO
