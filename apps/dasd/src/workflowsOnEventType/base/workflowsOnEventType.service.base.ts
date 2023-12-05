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
  WorkflowsOnEventType,
  EventType,
  Workflow,
} from "@prisma/client";

export class WorkflowsOnEventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkflowsOnEventTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeCountArgs>
  ): Promise<number> {
    return this.prisma.workflowsOnEventType.count(args);
  }

  async findMany<T extends Prisma.WorkflowsOnEventTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeFindManyArgs>
  ): Promise<WorkflowsOnEventType[]> {
    return this.prisma.workflowsOnEventType.findMany(args);
  }
  async findOne<T extends Prisma.WorkflowsOnEventTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeFindUniqueArgs>
  ): Promise<WorkflowsOnEventType | null> {
    return this.prisma.workflowsOnEventType.findUnique(args);
  }
  async create<T extends Prisma.WorkflowsOnEventTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeCreateArgs>
  ): Promise<WorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.create<T>(args);
  }
  async update<T extends Prisma.WorkflowsOnEventTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeUpdateArgs>
  ): Promise<WorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.update<T>(args);
  }
  async delete<T extends Prisma.WorkflowsOnEventTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowsOnEventTypeDeleteArgs>
  ): Promise<WorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.delete(args);
  }

  async getEventType(parentId: number): Promise<EventType | null> {
    return this.prisma.workflowsOnEventType
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getWorkflow(parentId: number): Promise<Workflow | null> {
    return this.prisma.workflowsOnEventType
      .findUnique({
        where: { id: parentId },
      })
      .workflow();
  }
}
