import type { Social } from './Social';

export interface Profile {
	id: string;
	name: string;
	imageUrl: string;
	socials: Social[];
}
