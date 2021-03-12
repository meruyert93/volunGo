import React, { useState } from 'react';
import { Step } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


function NGOStepsForReg({activPicker}) {
    const { t } = useTranslation();

    const history = useHistory();

    return (
        <Step.Group fluid attached="top">
            <Step onClick={()=> activPicker(1)}>
                <Step.Content>
                    <Step.Title>{t('basic_information')}</Step.Title>
                </Step.Content>
            </Step>
            <Step onClick={()=> activPicker(2)}>
                <Step.Content>
                    <Step.Title>{t('location_time')}</Step.Title>
                </Step.Content>
            </Step>
            <Step onClick={()=> activPicker(3)}>
                <Step.Content>
                    <Step.Title>{t('skill_requirements')}</Step.Title>
                </Step.Content>
            </Step>
            <Step onClick={()=> activPicker(4)}>
                <Step.Content>
                    <Step.Title>{t('image_description')}</Step.Title>
                </Step.Content>
            </Step>
            <Step onClick={()=> activPicker(5)}>
                <Step.Content>
                    <Step.Title>{t('invite_volunteers_reg')}</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    )
}

export default NGOStepsForReg;
