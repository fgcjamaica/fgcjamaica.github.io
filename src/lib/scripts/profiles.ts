import { github, instagram } from './socials';
import ajaniHickling from '$lib/assets/images/ajani-hickling.png';
import type { Profile } from '$lib/types/Profile';
const profilesWithoutImage = [
	{
		id: 'ajani-hickling',
		name: 'Ajani Hickling',
		socials: [github('ajanihickling'), instagram('ajanihickling')],
		imageUrl: ajaniHickling
	},
	{
		id: 'ajani-hickling',
		name: 'Chelsea Rerrie',
		socials: [github('chelse'), instagram('cherry.jpeg')],
		imageUrl: ajaniHickling
	}
] as const;
const loadProfileImageUrl = async ({ id }: { id: string }): Promise<string> => {
	const image = await import(`$lib/assets/images/${id}.png`);
	return image.default;
};
export const profiles = profilesWithoutImage;

// await Promise.all(
// 	profilesWithoutImage.map(async (profile) => {
// 		return {
// 			...profile,
// 			imageUrl: await loadProfileImageUrl(profile)
// 		} as const;
// 	})
// );

export const getProfile = ({ id }: { id: string }): Profile => {
	const profile = profiles.find((profile) => profile.id === id);
	if (!profile) {
		throw new Error(`Profile not found: ${id}`);
	}
	return profile as unknown as Profile;
};
