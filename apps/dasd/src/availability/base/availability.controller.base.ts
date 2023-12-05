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
import { AvailabilityService } from "../availability.service";
import { AvailabilityCreateInput } from "./AvailabilityCreateInput";
import { AvailabilityWhereInput } from "./AvailabilityWhereInput";
import { AvailabilityWhereUniqueInput } from "./AvailabilityWhereUniqueInput";
import { AvailabilityFindManyArgs } from "./AvailabilityFindManyArgs";
import { AvailabilityUpdateInput } from "./AvailabilityUpdateInput";
import { Availability } from "./Availability";

export class AvailabilityControllerBase {
  constructor(protected readonly service: AvailabilityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Availability })
  async create(
    @common.Body() data: AvailabilityCreateInput
  ): Promise<Availability> {
    return await this.service.create({
      data: {
        ...data,

        eventType: data.eventType
          ? {
              connect: data.eventType,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Availability] })
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Availability[]> {
    const args = plainToClass(AvailabilityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

        user: {
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
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AvailabilityWhereUniqueInput,
    @common.Body() data: AvailabilityUpdateInput
  ): Promise<Availability | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          eventType: data.eventType
            ? {
                connect: data.eventType,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          date: true,
          days: true,
          endTime: true,

          eventType: {
            select: {
              id: true,
            },
          },

          id: true,

          schedule: {
            select: {
              id: true,
            },
          },

          startTime: true,

          user: {
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
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          date: true,
          days: true,
          endTime: true,

          eventType: {
            select: {
              id: true,
            },
          },

          id: true,

          schedule: {
            select: {
              id: true,
            },
          },

          startTime: true,

          user: {
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
