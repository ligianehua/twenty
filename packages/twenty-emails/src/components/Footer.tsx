import { type I18n } from '@lingui/core';
import { Column, Container, Row } from 'react-email';
import { Link } from 'src/components/Link';
import { ShadowText } from 'src/components/ShadowText';
import { BRAND_CONFIG } from 'twenty-shared/constants';

const footerContainerStyle = {
  marginTop: '12px',
};

type FooterProps = {
  i18n: I18n;
};

export const Footer = ({ i18n }: FooterProps) => {
  return (
    <Container style={footerContainerStyle}>
      <Row>
        <Column>
          <ShadowText>
            <Link
              href={BRAND_CONFIG.websiteUrl}
              value={i18n._('Website')}
              aria-label={i18n._("Visit {productName}'s website", { productName: BRAND_CONFIG.productName })}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href={BRAND_CONFIG.sourceCodeUrl}
              value={i18n._('Github')}
              aria-label={i18n._("Visit {productName}'s source code repository", { productName: BRAND_CONFIG.productName })}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href={BRAND_CONFIG.documentationUrl}
              value={i18n._('User guide')}
              aria-label={i18n._("Read {productName}'s user guide", { productName: BRAND_CONFIG.productName })}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href={BRAND_CONFIG.documentationUrl}
              value={i18n._('Developers')}
              aria-label={i18n._("Visit {productName}'s developer documentation", { productName: BRAND_CONFIG.productName })}
            />
          </ShadowText>
        </Column>
      </Row>
      <ShadowText>
        <>
          {BRAND_CONFIG.legalEntityName}
          <br />
          {BRAND_CONFIG.legalEntityLocation}
        </>
      </ShadowText>
    </Container>
  );
};
