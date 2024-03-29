/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SelectedCalendar, User } from "@prisma/client";

export class SelectedCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SelectedCalendarCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarCountArgs>
  ): Promise<number> {
    return this.prisma.selectedCalendar.count(args);
  }

  async findMany<T extends Prisma.SelectedCalendarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarFindManyArgs>
  ): Promise<SelectedCalendar[]> {
    return this.prisma.selectedCalendar.findMany(args);
  }
  async findOne<T extends Prisma.SelectedCalendarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarFindUniqueArgs>
  ): Promise<SelectedCalendar | null> {
    return this.prisma.selectedCalendar.findUnique(args);
  }
  async create<T extends Prisma.SelectedCalendarCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarCreateArgs>
  ): Promise<SelectedCalendar> {
    return this.prisma.selectedCalendar.create<T>(args);
  }
  async update<T extends Prisma.SelectedCalendarUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarUpdateArgs>
  ): Promise<SelectedCalendar> {
    return this.prisma.selectedCalendar.update<T>(args);
  }
  async delete<T extends Prisma.SelectedCalendarDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelectedCalendarDeleteArgs>
  ): Promise<SelectedCalendar> {
    return this.prisma.selectedCalendar.delete(args);
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.selectedCalendar
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
