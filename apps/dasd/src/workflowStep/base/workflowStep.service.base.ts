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
  WorkflowStep,
  WorkflowReminder,
  Workflow,
} from "@prisma/client";

export class WorkflowStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WorkflowStepCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepCountArgs>
  ): Promise<number> {
    return this.prisma.workflowStep.count(args);
  }

  async findMany<T extends Prisma.WorkflowStepFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepFindManyArgs>
  ): Promise<WorkflowStep[]> {
    return this.prisma.workflowStep.findMany(args);
  }
  async findOne<T extends Prisma.WorkflowStepFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepFindUniqueArgs>
  ): Promise<WorkflowStep | null> {
    return this.prisma.workflowStep.findUnique(args);
  }
  async create<T extends Prisma.WorkflowStepCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepCreateArgs>
  ): Promise<WorkflowStep> {
    return this.prisma.workflowStep.create<T>(args);
  }
  async update<T extends Prisma.WorkflowStepUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepUpdateArgs>
  ): Promise<WorkflowStep> {
    return this.prisma.workflowStep.update<T>(args);
  }
  async delete<T extends Prisma.WorkflowStepDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkflowStepDeleteArgs>
  ): Promise<WorkflowStep> {
    return this.prisma.workflowStep.delete(args);
  }

  async findWorkflowReminders(
    parentId: number,
    args: Prisma.WorkflowReminderFindManyArgs
  ): Promise<WorkflowReminder[]> {
    return this.prisma.workflowStep
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workflowReminders(args);
  }

  async getWorkflow(parentId: number): Promise<Workflow | null> {
    return this.prisma.workflowStep
      .findUnique({
        where: { id: parentId },
      })
      .workflow();
  }
}
