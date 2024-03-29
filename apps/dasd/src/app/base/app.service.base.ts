/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, App, ApiKey, Credential, Webhook } from "@prisma/client";

export class AppServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AppCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppCountArgs>
  ): Promise<number> {
    return this.prisma.app.count(args);
  }

  async findMany<T extends Prisma.AppFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppFindManyArgs>
  ): Promise<App[]> {
    return this.prisma.app.findMany(args);
  }
  async findOne<T extends Prisma.AppFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppFindUniqueArgs>
  ): Promise<App | null> {
    return this.prisma.app.findUnique(args);
  }
  async create<T extends Prisma.AppCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppCreateArgs>
  ): Promise<App> {
    return this.prisma.app.create<T>(args);
  }
  async update<T extends Prisma.AppUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUpdateArgs>
  ): Promise<App> {
    return this.prisma.app.update<T>(args);
  }
  async delete<T extends Prisma.AppDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppDeleteArgs>
  ): Promise<App> {
    return this.prisma.app.delete(args);
  }

  async findApiKey(
    parentId: string,
    args: Prisma.ApiKeyFindManyArgs
  ): Promise<ApiKey[]> {
    return this.prisma.app
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .apiKey(args);
  }

  async findCredentials(
    parentId: string,
    args: Prisma.CredentialFindManyArgs
  ): Promise<Credential[]> {
    return this.prisma.app
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .credentials(args);
  }

  async findWebhook(
    parentId: string,
    args: Prisma.WebhookFindManyArgs
  ): Promise<Webhook[]> {
    return this.prisma.app
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .webhook(args);
  }
}
