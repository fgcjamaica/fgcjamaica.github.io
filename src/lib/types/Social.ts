export interface Social {
  name: string;
  url: string;
}
export type SocialTemplate = (username: string) => Social;

export const socialTemplates = {
  instagram: (username: string) => ({
    name: 'Instagram',
    url: `https://instagram.com/${username}`,
  }),
}
