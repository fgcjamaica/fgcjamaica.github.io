export interface Member {
  name: string;
  positions: Position[]
  role: Role
  imagePath: string
}
export enum Role {
  Support = 'Support Member',
  Member = 'Member',
}
export enum Position {
  Programmer = 'Programmer',
  Engineer = 'Engineer',
  LeadProgrammer = 'Lead Programmer',
  LeadEngineer = 'Lead Engineer',
  TeamCaptain = 'Team Captain',
  DeputyTeamCaptain = 'Deputy Team Captain',
  Spokesperson = 'Spokesperson',
  DeputySpokesperson = 'Deputy Spokesperson',
  LeadCAD = 'Lead CAD',
  CAD = 'CAD',
}
