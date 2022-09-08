import { github, instagram } from './socials';
import type { Profile } from '$lib/types/Profile';
const profilesWithoutImage = [
	{
		name: "Paul Pounall",
		intro: "Howdy! I'm Pablo, the Engineer coach. Jamaica College Alumnus."
	},
	{
		name: "Gavin Samuels",
		intro: "Greetings! I'm Gavin, the Head coach. Jamaica College Alumnus. 8+ years coacjing experience."

	},
	{
		name: "Stephanie Williams",
		socials:[instagram('_stephnathwill_')],
		intro: "Hi! I'm Steph, the Team Captain and Engineer. Immaculate Conception High School."
	},
	{
		name: 'Ajani Hickling',
		socials: [github('42-Life'), instagram('renzu_photos')],
		intro: "Hi! I'm Ajani (Macbook), I serve as the Deputy Spokesperson and programmer. Coming from American International School of Kingston (AISK)."
	},
	{
		name: 'Chelsea Rerrie',
		socials: [ github('cherry-java'),instagram('cherrysoda.jpeg')],
		intro: "Hi! I'm Chels. Spokesperson and programmer dabbling in CAD. Coming from Immaculate Conception High School."
	},
	{
		name: 'Orville Daley',
		socials: [github('crypto-cmd'), instagram('oj.frxst')],
		intro: "Hey! I'm Orville. Lead Programmer. From Jamaica College. PS: I made the website."
	},

];
const loadProfileImageUrl = async ({ id }: { id: string }): Promise<string> => {
	const image = await import(`$lib/assets/images/profiles/${id}.webp`);
	return image.default;
};

export const profiles = await Promise.all(
	profilesWithoutImage.map(async (profile) => {
		const id = profile.name.toLowerCase().replace(/ /g, '-');
		return {
			...profile,
			id,
			imageUrl: await loadProfileImageUrl({ id })
		} as const;
	})
);

export const getProfile = ({ id }: { id: string }): Profile => {
	const profile = profiles.find((profile) => profile.id === id);
	if (!profile) {
		throw new Error(`Profile not found: ${id}`);
	}
	return profile as unknown as Profile;
};