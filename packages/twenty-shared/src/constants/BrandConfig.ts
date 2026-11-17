// Single source of truth for product branding; see BRANDING.md at the repo root.
export const BRAND_CONFIG = {
  productName: 'Acme CRM',
  productDescription: 'A modern CRM',
  websiteUrl: 'https://example.com',
  termsPath: '/terms',
  privacyPolicyPath: '/privacy-policy',
  logoPath: '/images/brand/logo.svg',
  emailLogoUrl: 'https://example.com/images/brand/logo-150.png',
  legalEntityName: 'Acme, Inc.',
  legalEntityLocation: 'Your City',
  sourceCodeUrl: 'https://github.com/your-org/acme-crm',
  documentationUrl: 'https://example.com/docs',
} as const;
