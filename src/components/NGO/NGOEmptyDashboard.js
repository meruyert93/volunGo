import React from 'react';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

function NGOEmptyDashboard() {
  const { t } = useTranslation();

  return (
    <Segment basic style={{ height: '60vh' }}>
      <div className="emptyDashboard-container">
        <div className="emptyDashboard-text-container">
          <Header className="emptyDashboard-title">
            {t('empty_dashboard')}
          </Header>
          <p className="emptyDashboard-text">{t('sub_text_empty_dashboard')}</p>
        </div>
      </div>
    </Segment>
  );
}

export default NGOEmptyDashboard;
