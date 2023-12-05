/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Webhook, App, EventType, User } from "@prisma/client";

export class WebhookServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WebhookCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookCountArgs>
  ): Promise<number> {
    return this.prisma.webhook.count(args);
  }

  async findMany<T extends Prisma.WebhookFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookFindManyArgs>
  ): Promise<Webhook[]> {
    return this.prisma.webhook.findMany(args);
  }
  async findOne<T extends Prisma.WebhookFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookFindUniqueArgs>
  ): Promise<Webhook | null> {
    return this.prisma.webhook.findUnique(args);
  }
  async create<T extends Prisma.WebhookCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookCreateArgs>
  ): Promise<Webhook> {
    return this.prisma.webhook.create<T>(args);
  }
  async update<T extends Prisma.WebhookUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookUpdateArgs>
  ): Promise<Webhook> {
    return this.prisma.webhook.update<T>(args);
  }
  async delete<T extends Prisma.WebhookDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookDeleteArgs>
  ): Promise<Webhook> {
    return this.prisma.webhook.delete(args);
  }

  async getApp(parentId: string): Promise<App | null> {
    return this.prisma.webhook
      .findUnique({
        where: { id: parentId },
      })
      .app();
  }

  async getEventType(parentId: string): Promise<EventType | null> {
    return this.prisma.webhook
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.webhook
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}