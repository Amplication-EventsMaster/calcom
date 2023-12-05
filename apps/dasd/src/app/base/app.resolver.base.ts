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
import { CreateAppArgs } from "./CreateAppArgs";
import { UpdateAppArgs } from "./UpdateAppArgs";
import { DeleteAppArgs } from "./DeleteAppArgs";
import { AppCountArgs } from "./AppCountArgs";
import { AppFindManyArgs } from "./AppFindManyArgs";
import { AppFindUniqueArgs } from "./AppFindUniqueArgs";
import { App } from "./App";
import { ApiKeyFindManyArgs } from "../../apiKey/base/ApiKeyFindManyArgs";
import { ApiKey } from "../../apiKey/base/ApiKey";
import { CredentialFindManyArgs } from "../../credential/base/CredentialFindManyArgs";
import { Credential } from "../../credential/base/Credential";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { AppService } from "../app.service";
@graphql.Resolver(() => App)
export class AppResolverBase {
  constructor(protected readonly service: AppService) {}

  async _appsMeta(
    @graphql.Args() args: AppCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [App])
  async apps(@graphql.Args() args: AppFindManyArgs): Promise<App[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => App, { nullable: true })
  async app(@graphql.Args() args: AppFindUniqueArgs): Promise<App | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => App)
  async createApp(@graphql.Args() args: CreateAppArgs): Promise<App> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => App)
  async updateApp(@graphql.Args() args: UpdateAppArgs): Promise<App | null> {
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

  @graphql.Mutation(() => App)
  async deleteApp(@graphql.Args() args: DeleteAppArgs): Promise<App | null> {
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

  @graphql.ResolveField(() => [ApiKey], { name: "apiKey" })
  async resolveFieldApiKey(
    @graphql.Parent() parent: App,
    @graphql.Args() args: ApiKeyFindManyArgs
  ): Promise<ApiKey[]> {
    const results = await this.service.findApiKey(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Credential], { name: "credentials" })
  async resolveFieldCredentials(
    @graphql.Parent() parent: App,
    @graphql.Args() args: CredentialFindManyArgs
  ): Promise<Credential[]> {
    const results = await this.service.findCredentials(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Webhook], { name: "webhook" })
  async resolveFieldWebhook(
    @graphql.Parent() parent: App,
    @graphql.Args() args: WebhookFindManyArgs
  ): Promise<Webhook[]> {
    const results = await this.service.findWebhook(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
