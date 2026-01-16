import { UserCreateNestedManyWithoutVerificationTokensInput } from "./UserCreateNestedManyWithoutVerificationTokensInput";

export type VerificationTokenCreateInput = {
  expires: Date;
  identifier: string;
  token: string;
  users?: UserCreateNestedManyWithoutVerificationTokensInput;
};
