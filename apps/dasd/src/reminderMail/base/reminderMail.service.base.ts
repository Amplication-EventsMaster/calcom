/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReminderMail } from "@prisma/client";

export class ReminderMailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReminderMailCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailCountArgs>
  ): Promise<number> {
    return this.prisma.reminderMail.count(args);
  }

  async findMany<T extends Prisma.ReminderMailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailFindManyArgs>
  ): Promise<ReminderMail[]> {
    return this.prisma.reminderMail.findMany(args);
  }
  async findOne<T extends Prisma.ReminderMailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailFindUniqueArgs>
  ): Promise<ReminderMail | null> {
    return this.prisma.reminderMail.findUnique(args);
  }
  async create<T extends Prisma.ReminderMailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailCreateArgs>
  ): Promise<ReminderMail> {
    return this.prisma.reminderMail.create<T>(args);
  }
  async update<T extends Prisma.ReminderMailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailUpdateArgs>
  ): Promise<ReminderMail> {
    return this.prisma.reminderMail.update<T>(args);
  }
  async delete<T extends Prisma.ReminderMailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReminderMailDeleteArgs>
  ): Promise<ReminderMail> {
    return this.prisma.reminderMail.delete(args);
  }
}