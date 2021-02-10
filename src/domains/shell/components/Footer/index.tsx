import React from 'react';
import { Linking } from 'react-native';
import { FooterContainer, FooterText } from 'domains/shell/components/Footer/styles';
import { useTranslation } from 'app/translation';
import { eLibsUrl } from 'app/config/constants';

export const Footer = () => {
  const { t } = useTranslation();

  const openLink = () => {
    Linking.openURL(eLibsUrl);
  };

  return (
    <FooterContainer>
      <FooterText onPress={openLink}>{t('footer.description')}</FooterText>
    </FooterContainer>
  );
};
