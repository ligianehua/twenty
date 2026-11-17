import { BRAND_CONFIG } from 'twenty-shared/constants';

type TwentyWebsitePage = 'terms' | 'privacy-policy';

const PATH_BY_PAGE: Record<TwentyWebsitePage, string> = {
  terms: BRAND_CONFIG.termsPath,
  'privacy-policy': BRAND_CONFIG.privacyPolicyPath,
};

export const getTwentyWebsiteUrl = (
  _locale: string,
  page: TwentyWebsitePage,
): string => new URL(PATH_BY_PAGE[page], BRAND_CONFIG.websiteUrl).toString();
