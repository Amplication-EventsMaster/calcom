import { UserUpdateManyWithoutVerificationTokensInput } from "./UserUpdateManyWithoutVerificationTokensInput";

export type VerificationTokenUpdateInput = {
  expires?: Date;
  identifier?: string;
  token?: string;
  users?: UserUpdateManyWithoutVerificationTokensInput;
};
