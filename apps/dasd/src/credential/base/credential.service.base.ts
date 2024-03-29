/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Credential,
  DestinationCalendar,
  App,
  User,
} from "@prisma/client";

export class CredentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CredentialCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialCountArgs>
  ): Promise<number> {
    return this.prisma.credential.count(args);
  }

  async findMany<T extends Prisma.CredentialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialFindManyArgs>
  ): Promise<Credential[]> {
    return this.prisma.credential.findMany(args);
  }
  async findOne<T extends Prisma.CredentialFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialFindUniqueArgs>
  ): Promise<Credential | null> {
    return this.prisma.credential.findUnique(args);
  }
  async create<T extends Prisma.CredentialCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialCreateArgs>
  ): Promise<Credential> {
    return this.prisma.credential.create<T>(args);
  }
  async update<T extends Prisma.CredentialUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialUpdateArgs>
  ): Promise<Credential> {
    return this.prisma.credential.update<T>(args);
  }
  async delete<T extends Prisma.CredentialDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialDeleteArgs>
  ): Promise<Credential> {
    return this.prisma.credential.delete(args);
  }

  async findDestinationCalendars(
    parentId: number,
    args: Prisma.DestinationCalendarFindManyArgs
  ): Promise<DestinationCalendar[]> {
    return this.prisma.credential
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .destinationCalendars(args);
  }

  async getApp(parentId: number): Promise<App | null> {
    return this.prisma.credential
      .findUnique({
        where: { id: parentId },
      })
      .app();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.credential
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
