import React from 'react'
import { Grid, Segment, Header, Button, Form, Progress, Divider} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";

function ProjectImage() {
    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={33} attached='top' size='medium' color='blue'/>
            <Grid>
                
            </Grid>
        </Segment>
    )
}

export default ProjectImage
