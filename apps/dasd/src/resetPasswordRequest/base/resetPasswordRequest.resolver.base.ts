/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateResetPasswordRequestArgs } from "./CreateResetPasswordRequestArgs";
import { UpdateResetPasswordRequestArgs } from "./UpdateResetPasswordRequestArgs";
import { DeleteResetPasswordRequestArgs } from "./DeleteResetPasswordRequestArgs";
import { ResetPasswordRequestCountArgs } from "./ResetPasswordRequestCountArgs";
import { ResetPasswordRequestFindManyArgs } from "./ResetPasswordRequestFindManyArgs";
import { ResetPasswordRequestFindUniqueArgs } from "./ResetPasswordRequestFindUniqueArgs";
import { ResetPasswordRequest } from "./ResetPasswordRequest";
import { ResetPasswordRequestService } from "../resetPasswordRequest.service";
@graphql.Resolver(() => ResetPasswordRequest)
export class ResetPasswordRequestResolverBase {
  constructor(protected readonly service: ResetPasswordRequestService) {}

  async _resetPasswordRequestsMeta(
    @graphql.Args() args: ResetPasswordRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ResetPasswordRequest])
  async resetPasswordRequests(
    @graphql.Args() args: ResetPasswordRequestFindManyArgs
  ): Promise<ResetPasswordRequest[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ResetPasswordRequest, { nullable: true })
  async resetPasswordRequest(
    @graphql.Args() args: ResetPasswordRequestFindUniqueArgs
  ): Promise<ResetPasswordRequest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ResetPasswordRequest)
  async createResetPasswordRequest(
    @graphql.Args() args: CreateResetPasswordRequestArgs
  ): Promise<ResetPasswordRequest> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ResetPasswordRequest)
  async updateResetPasswordRequest(
    @graphql.Args() args: UpdateResetPasswordRequestArgs
  ): Promise<ResetPasswordRequest | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ResetPasswordRequest)
  async deleteResetPasswordRequest(
    @graphql.Args() args: DeleteResetPasswordRequestArgs
  ): Promise<ResetPasswordRequest | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}