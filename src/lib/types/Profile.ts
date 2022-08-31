import type { Social } from './Social';

export interface Profile {
	id: string;
	name: string;
	socials: Social[];
}
