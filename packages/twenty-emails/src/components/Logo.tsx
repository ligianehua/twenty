import { type I18n } from '@lingui/core';
import { Img } from 'react-email';
import { BRAND_CONFIG } from 'twenty-shared/constants';

const logoStyle = {
  marginBottom: '40px',
};

type LogoProps = {
  i18n: I18n;
};

export const Logo = ({ i18n }: LogoProps) => {
  return (
    <Img
      src={BRAND_CONFIG.emailLogoUrl}
      alt={i18n._('{productName} logo', {
        productName: BRAND_CONFIG.productName,
      })}
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
