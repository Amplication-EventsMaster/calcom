import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type VerificationTokenWhereInput = {
  createdAt?: DateTimeFilter;
  expires?: DateTimeFilter;
  id?: IntFilter;
  identifier?: StringFilter;
  token?: StringFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
};
