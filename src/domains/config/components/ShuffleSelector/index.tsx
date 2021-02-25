import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import type { ConfigOption } from 'domains/config/data/types';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const ShuffleSelector = () => {
  const { t } = useTranslation();
  const { isBlindfolded } = useConfig();
  const options: ConfigOption[] = [
    {
      color: '#26bd53',
      description: t('config.shuffle.off.description'),
      label: t('config.shuffle.off.label'),
      value: false,
    },
    {
      color: '#bd322d',
      description: t('config.shuffle.on.description'),
      label: t('config.shuffle.on.label'),
      value: true,
    },
  ];
  const disabled = isBlindfolded;
  const disabledReason = isBlindfolded ? t('config.shuffle.disabledReason') : '';

  return (
    <ConfigSelector
      title={t('config.shuffle.label')}
      options={options}
      configType="SHUFFLE"
      disabled={disabled}
      disabledReason={disabledReason}
    />
  );
};
