import { getTwentyWebsiteUrl } from '@/auth/utils/getTwentyWebsiteUrl';
import { BRAND_CONFIG } from 'twenty-shared/constants';

describe('getTwentyWebsiteUrl', () => {
  it('points the terms page at the brand website', () => {
    expect(getTwentyWebsiteUrl('fr-FR', 'terms')).toBe(
      new URL(BRAND_CONFIG.termsPath, BRAND_CONFIG.websiteUrl).toString(),
    );
  });

  it('points the privacy policy page at the brand website', () => {
    expect(getTwentyWebsiteUrl('en', 'privacy-policy')).toBe(
      new URL(
        BRAND_CONFIG.privacyPolicyPath,
        BRAND_CONFIG.websiteUrl,
      ).toString(),
    );
  });
});
