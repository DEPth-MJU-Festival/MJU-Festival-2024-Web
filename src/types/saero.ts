interface TeamMember {
  name: string;
  info: string;
}

export interface Saero {
  team: string;
  leader: string;
  leaderInfo: string;
  subLeader: string | null | undefined | TeamMember[];
  subLeaderInfo: string | null;
  members: TeamMember[] | null;
}
