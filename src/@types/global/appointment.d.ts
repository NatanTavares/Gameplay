import { GuildType } from "./guild";

export type AppointmentType = {
  id: string;
  guild: GuildType;
  category: string;
  date: string;
  description: string;
};
