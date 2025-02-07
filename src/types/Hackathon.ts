export type Hackathon = {
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
  mode: "online" | "in-person" | "hybrid";
  maxParticipantsPerTeam: number;
  prizes: {
    position: number;
    reward: string;
  }[];
  website?: string;
  registrationLink?: string;
  rating?: number; // Optional, scale 1-5
};