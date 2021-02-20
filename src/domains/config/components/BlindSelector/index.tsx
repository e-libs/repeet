import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import type { ConfigOption } from 'domains/config/data/types';

export const BlindSelector = () => {
  const { t } = useTranslation();
  const { isSoundOn } = useConfig();
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
  const disabled = !isSoundOn;
  const disabledReason = !isSoundOn ? t('config.blind.disabledReason') : '';

  return (
    <ConfigSelector
      configType="BLIND"
      disabled={disabled}
      disabledReason={disabledReason}
      options={options}
      title={t('config.blind.label')}
    />
  );
};
