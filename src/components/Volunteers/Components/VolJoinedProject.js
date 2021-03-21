import React from 'react';
import { useParams } from "react-router-dom";
import { Grid, Segment, Header, Button, Form, Divider, Image, Icon} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dataProjects from '../../../data/dataProjects';

function VolJoinedProject({}) {
    let { id } = useParams();
    
    const el = dataProjects[id-1];
    const { name, organization, duration, days, time, place, contact_person, contact_email} = el;
    const { t } = useTranslation();

    const history = useHistory();

    const backHome = () => {
        const path = `/projects`
        history.push(path);
    }

    return (
        <Segment size='large' padded='very'>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={10} verticalAlign='middle'>
                        <Grid>
                            <Grid.Column width={16} textAlign="center">
                                <Header  as='h2' className="headingText"> 
                                    {t('your_request')}
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={16} textAlign="center">
                                <Header as="h5" color="grey">
                                {t('sub_text_your_request')}
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header as="h4">{name}</Header>
                                <Header as='h5' color='grey'>{organization}</Header>
                            </Grid.Column>
                            <Grid.Row>
                                    <Grid.Column>
                                        <Header as='h5'>
                                            <Image src="/./images/icons/calendar.svg" className='mobileHide'/>
                                            <Header.Content>
                                                {t('date')}
                                                <Header.Subheader>
                                                {duration && "|" + duration } {days && "|" + days }  {time && "|" + time}
                                                </Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                        <Header as='h5'>
                                            <Image src="/./images/icons/location.svg" className='mobileHide'/>
                                            <Header.Content>
                                                {t('location')}
                                                <Header.Subheader>
                                                    {place}
                                                </Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                        <Header as='h5'>
                                            <Image src="/./images/icons/contact.svg" className='mobileHide'/>
                                            <Header.Content>
                                                {t('contact_info_vol')}
                                                <Header.Subheader>
                                                    {contact_person} / {contact_email}
                                                </Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>
                            </Grid.Row>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Button color='pink' fluid onClick={() => backHome()}>
                                    {t('back_home_btn')}
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={6} verticalAlign='middle'>
                        <Image src="/./images/VolunteersRequestSent.png" size="large" rounded/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default VolJoinedProject

