export interface User {
  steamId: string;
  displayName: string;
  avatar: string;
  countryCode: string;
  isVerified: boolean;
  referralSource: string;
  createdAt: string;
  bio?: string,
  referral?: string,
}
