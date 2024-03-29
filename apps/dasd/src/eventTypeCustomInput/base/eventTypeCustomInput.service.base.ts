/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EventTypeCustomInput, EventType } from "@prisma/client";

export class EventTypeCustomInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EventTypeCustomInputCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputCountArgs>
  ): Promise<number> {
    return this.prisma.eventTypeCustomInput.count(args);
  }

  async findMany<T extends Prisma.EventTypeCustomInputFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputFindManyArgs>
  ): Promise<EventTypeCustomInput[]> {
    return this.prisma.eventTypeCustomInput.findMany(args);
  }
  async findOne<T extends Prisma.EventTypeCustomInputFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputFindUniqueArgs>
  ): Promise<EventTypeCustomInput | null> {
    return this.prisma.eventTypeCustomInput.findUnique(args);
  }
  async create<T extends Prisma.EventTypeCustomInputCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputCreateArgs>
  ): Promise<EventTypeCustomInput> {
    return this.prisma.eventTypeCustomInput.create<T>(args);
  }
  async update<T extends Prisma.EventTypeCustomInputUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputUpdateArgs>
  ): Promise<EventTypeCustomInput> {
    return this.prisma.eventTypeCustomInput.update<T>(args);
  }
  async delete<T extends Prisma.EventTypeCustomInputDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCustomInputDeleteArgs>
  ): Promise<EventTypeCustomInput> {
    return this.prisma.eventTypeCustomInput.delete(args);
  }

  async getEventType(parentId: number): Promise<EventType | null> {
    return this.prisma.eventTypeCustomInput
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }
}
