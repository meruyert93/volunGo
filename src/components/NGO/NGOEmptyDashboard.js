import React from 'react';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function NGOEmptyDashboard() {
  const { t } = useTranslation();

  return (
    <Segment basic style={{ height: '60vh' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header
          style={{
            fontFamily: 'Manrope',
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#333333',
          }}
        >
          {t('empty_dashboard')}
        </Header>
        <p>{t('sub_text_empty_dashboard')}</p>
      </div>
    </Segment>
  );
}

export default NGOEmptyDashboard;
