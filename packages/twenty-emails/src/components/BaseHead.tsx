import { type I18n } from '@lingui/core';
import { Font, Head } from 'react-email';

import { canvasTheme } from 'src/common-style';
import { BRAND_CONFIG } from 'twenty-shared/constants';

type BaseHeadProps = {
  i18n: I18n;
};

export const BaseHead = ({ i18n }: BaseHeadProps) => {
  return (
    <Head>
      <title>
        {i18n._('{productName} email', {
          productName: BRAND_CONFIG.productName,
        })}
      </title>
      <Font
        fontFamily={canvasTheme.font.family}
        fallbackFontFamily="sans-serif"
        fontStyle="normal"
        fontWeight={canvasTheme.font.weight.regular}
      />
    </Head>
  );
};
