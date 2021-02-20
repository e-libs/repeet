import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import type { ConfigOption } from 'domains/config/data/types';

export const BlindSelector = () => {
  const { t } = useTranslation();
  const options: ConfigOption[] = [
    {
      color: '#26bd53',
      description: t('config.blind.off.description'),
      label: t('config.blind.off.label'),
      value: false,
    },
    {
      color: '#bd322d',
      description: t('config.blind.on.description'),
      label: t('config.blind.on.label'),
      value: true,
    },
  ];

  return <ConfigSelector title={t('config.blind.label')} options={options} configType="BLIND" />;
};
