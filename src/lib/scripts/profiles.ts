import { github, instagram } from './socials';

const profilesWithoutImage = [
	{
		id: 'ajani-hickling',
		name: 'Ajani Hickling',
		socials: [github('ajanihickling'), instagram('ajanihickling')]
	},
	{
		id: 'ajani-hickling',
		name: 'Chelsea Rerrie',
		socials: [github('chelse'), instagram('cherry.jpeg')]
	}
] as const;
const loadProfileImageUrl = async ({ id }: { id: string }): Promise<string> => {
	const image = await import(`$lib/assets/images/${id}.png`);
	return image.default;
};
export const profiles = await Promise.all(
	profilesWithoutImage.map(async (profile) => {
		return {
			...profile,
			imageUrl: await loadProfileImageUrl(profile)
		} as const;
	})
);
