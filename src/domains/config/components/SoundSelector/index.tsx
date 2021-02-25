import React from 'react';
import { useTranslation } from 'app/translation';
import { ConfigSelector } from 'domains/config/components/ConfigSelector';
import type { ConfigOption } from 'domains/config/data/types';

export const SoundSelector = () => {
  const { t } = useTranslation();
  const options: ConfigOption[] = [
    { label: t('config.sound.off'), color: '#bd322d', value: false },
    { label: t('config.sound.on'), color: '#26bd53', value: true },
  ];

  return <ConfigSelector title={t('config.sound.label')} options={options} configType="SOUND" />;
};
