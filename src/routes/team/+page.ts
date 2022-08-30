import { type Member, Position, Role } from '$lib/MemberList/Member';

/** @type {import('./$types').PageData} */
export async function load({ data }: any) {
	const member = {
		name: 'Ajani Hickling',
		positions: [Position.Programmer, Position.DeputySpokesperson],
		role: Role.Support,
		imagePath: '/profile.png'
	};
	const members: Member[] = [
		{
			name: 'Ajani Hickling',
			positions: [Position.Programmer, Position.DeputySpokesperson],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Chelsea Rerrie',
			positions: [Position.Programmer, Position.Spokesperson, Position.CAD],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Orville Daley',
			positions: [Position.LeadProgrammer],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Stephanie Williams',
			positions: [Position.Engineer, Position.TeamCaptain],
			role: Role.Support,
			imagePath: '/profile.png'
		},{
			name: 'Ajani Hickling',
			positions: [Position.Programmer, Position.DeputySpokesperson],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Chelsea Rerrie',
			positions: [Position.Programmer, Position.Spokesperson, Position.CAD],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Orville Daley',
			positions: [Position.LeadProgrammer],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Stephanie Williams',
			positions: [Position.Engineer, Position.TeamCaptain],
			role: Role.Support,
			imagePath: '/profile.png'
		},{
			name: 'Ajani Hickling',
			positions: [Position.Programmer, Position.DeputySpokesperson],
			role: Role.Member,
			imagePath: '/profile.png'
		},
		{
			name: 'Chelsea Rerrie',
			positions: [Position.Programmer, Position.Spokesperson, Position.CAD],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Orville Daley',
			positions: [Position.LeadProgrammer],
			role: Role.Support,
			imagePath: '/profile.png'
		},
		{
			name: 'Stephanie Williams',
			positions: [Position.Engineer, Position.TeamCaptain],
			role: Role.Support,
			imagePath: '/profile.png'
		}
	];
	return { members };
}
