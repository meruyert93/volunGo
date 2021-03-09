import React from 'react'
import { Grid, Segment, Header, Button, Form, Progress, Divider, GridRow} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateNGOAction from "../../adapters/updateNGOAction";

function NGOSignUpAdd() {
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ updateNGOAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.ngoDetails
    });

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateNGOAction(data);
        let path = `sign-up2`;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={66} attached='top' size='medium' color='blue'/>
            <Grid>

            </Grid>
        </Segment>
    )
}

export default NGOSignUpAdd
