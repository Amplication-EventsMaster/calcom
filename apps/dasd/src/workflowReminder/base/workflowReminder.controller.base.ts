/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WorkflowReminderService } from "../workflowReminder.service";
import { WorkflowReminderCreateInput } from "./WorkflowReminderCreateInput";
import { WorkflowReminderWhereInput } from "./WorkflowReminderWhereInput";
import { WorkflowReminderWhereUniqueInput } from "./WorkflowReminderWhereUniqueInput";
import { WorkflowReminderFindManyArgs } from "./WorkflowReminderFindManyArgs";
import { WorkflowReminderUpdateInput } from "./WorkflowReminderUpdateInput";
import { WorkflowReminder } from "./WorkflowReminder";

export class WorkflowReminderControllerBase {
  constructor(protected readonly service: WorkflowReminderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkflowReminder })
  async create(
    @common.Body() data: WorkflowReminderCreateInput
  ): Promise<WorkflowReminder> {
    return await this.service.create({
      data: {
        ...data,

        booking: data.booking
          ? {
              connect: data.booking,
            }
          : undefined,

        workflowStep: {
          connect: data.workflowStep,
        },
      },
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        id: true,
        method: true,
        referenceId: true,
        scheduled: true,
        scheduledDate: true,

        workflowStep: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkflowReminder] })
  @ApiNestedQuery(WorkflowReminderFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<WorkflowReminder[]> {
    const args = plainToClass(WorkflowReminderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        id: true,
        method: true,
        referenceId: true,
        scheduled: true,
        scheduledDate: true,

        workflowStep: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkflowReminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: WorkflowReminderWhereUniqueInput
  ): Promise<WorkflowReminder | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        id: true,
        method: true,
        referenceId: true,
        scheduled: true,
        scheduledDate: true,

        workflowStep: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WorkflowReminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: WorkflowReminderWhereUniqueInput,
    @common.Body() data: WorkflowReminderUpdateInput
  ): Promise<WorkflowReminder | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          booking: data.booking
            ? {
                connect: data.booking,
              }
            : undefined,

          workflowStep: {
            connect: data.workflowStep,
          },
        },
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          id: true,
          method: true,
          referenceId: true,
          scheduled: true,
          scheduledDate: true,

          workflowStep: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WorkflowReminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: WorkflowReminderWhereUniqueInput
  ): Promise<WorkflowReminder | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          booking: {
            select: {
              id: true,
            },
          },

          id: true,
          method: true,
          referenceId: true,
          scheduled: true,
          scheduledDate: true,

          workflowStep: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}