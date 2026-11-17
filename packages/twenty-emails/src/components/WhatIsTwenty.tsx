import { type I18n } from '@lingui/core';
import { MainText } from 'src/components/MainText';
import { SubTitle } from 'src/components/SubTitle';
import { BRAND_CONFIG } from 'twenty-shared/constants';

type WhatIsTwentyProps = {
  i18n: I18n;
};

export const WhatIsTwenty = ({ i18n }: WhatIsTwentyProps) => {
  return (
    <>
      <SubTitle value={i18n._('What is {productName}?', { productName: BRAND_CONFIG.productName })} />
      <MainText>
        {i18n._(
          "It's a CRM, a software to help businesses manage their customer data and relationships efficiently.",
        )}
      </MainText>
    </>
  );
};
