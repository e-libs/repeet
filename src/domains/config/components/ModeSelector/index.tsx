import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import type { ConfigOption } from 'domains/config/data/types';

export const ModeSelector = () => {
  const { t } = useTranslation();
  const options: ConfigOption[] = [
    {
      color: '#26bd53',
      description: t('config.mode.default.description'),
      label: t('config.mode.default.label'),
      value: 'DEFAULT',
    },
    {
      color: '#fc972b',
      description: t('config.mode.advanced.description'),
      label: t('config.mode.advanced.label'),
      value: 'ADVANCED',
    },
  ];

  return <ConfigSelector title={t('config.mode.label')} options={options} configType="MODE" />;
};
