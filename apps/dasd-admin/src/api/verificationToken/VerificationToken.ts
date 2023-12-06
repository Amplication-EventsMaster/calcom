import { User } from "../user/User";

export type VerificationToken = {
  createdAt: Date;
  expires: Date;
  id: number;
  identifier: string;
  token: string;
  updatedAt: Date;
  users?: Array<User>;
};
