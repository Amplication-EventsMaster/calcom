/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Membership, Team, User } from "@prisma/client";

export class MembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MembershipCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipCountArgs>
  ): Promise<number> {
    return this.prisma.membership.count(args);
  }

  async findMany<T extends Prisma.MembershipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipFindManyArgs>
  ): Promise<Membership[]> {
    return this.prisma.membership.findMany(args);
  }
  async findOne<T extends Prisma.MembershipFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipFindUniqueArgs>
  ): Promise<Membership | null> {
    return this.prisma.membership.findUnique(args);
  }
  async create<T extends Prisma.MembershipCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipCreateArgs>
  ): Promise<Membership> {
    return this.prisma.membership.create<T>(args);
  }
  async update<T extends Prisma.MembershipUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipUpdateArgs>
  ): Promise<Membership> {
    return this.prisma.membership.update<T>(args);
  }
  async delete<T extends Prisma.MembershipDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipDeleteArgs>
  ): Promise<Membership> {
    return this.prisma.membership.delete(args);
  }

  async getTeam(parentId: number): Promise<Team | null> {
    return this.prisma.membership
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.membership
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
