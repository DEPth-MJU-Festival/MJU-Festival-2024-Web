interface TeamMember {
  name: string;
  info: string;
}

export interface Saero {
  team: string;
  leader: string;
  leaderInfo: string;
  subLeader: string | null | undefined;
  subLeaderInfo: string | null | undefined;
  members: TeamMember[];
}
