import React from 'react';
import { Grid, Segment, Header, Button, Step } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NGORegistration() {
    const { t } = useTranslation();

    const history = useHistory();

    return (
        <Step.Group stackable fluid attached="top">
            <Step>
                <Step.Content>
                    <Step.Title>{t('basic_information')}</Step.Title>
                </Step.Content>
            </Step>
            <Step>
                <Step.Content>
                    <Step.Title>{t('location_time')}</Step.Title>
                </Step.Content>
            </Step>
            <Step>
                <Step.Content>
                    <Step.Title>{t('skill_requirements')}</Step.Title>
                </Step.Content>
            </Step>
            <Step>
                <Step.Content>
                    <Step.Title>{t('image_description')}</Step.Title>
                </Step.Content>
            </Step>
            <Step>
                <Step.Content>
                    <Step.Title>{t('invite_volunteers_reg')}</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    )
}

export default NGORegistration
