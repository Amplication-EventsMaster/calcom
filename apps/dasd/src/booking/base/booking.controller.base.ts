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
import { BookingService } from "../booking.service";
import { BookingCreateInput } from "./BookingCreateInput";
import { BookingWhereInput } from "./BookingWhereInput";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingUpdateInput } from "./BookingUpdateInput";
import { Booking } from "./Booking";
import { AttendeeFindManyArgs } from "../../attendee/base/AttendeeFindManyArgs";
import { Attendee } from "../../attendee/base/Attendee";
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { BookingReferenceFindManyArgs } from "../../bookingReference/base/BookingReferenceFindManyArgs";
import { BookingReference } from "../../bookingReference/base/BookingReference";
import { BookingReferenceWhereUniqueInput } from "../../bookingReference/base/BookingReferenceWhereUniqueInput";
import { WorkflowReminderFindManyArgs } from "../../workflowReminder/base/WorkflowReminderFindManyArgs";
import { WorkflowReminder } from "../../workflowReminder/base/WorkflowReminder";
import { WorkflowReminderWhereUniqueInput } from "../../workflowReminder/base/WorkflowReminderWhereUniqueInput";

export class BookingControllerBase {
  constructor(protected readonly service: BookingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Booking })
  async create(@common.Body() data: BookingCreateInput): Promise<Booking> {
    return await this.service.create({
      data: {
        ...data,

        dailyRef: data.dailyRef
          ? {
              connect: data.dailyRef,
            }
          : undefined,

        destinationCalendar: data.destinationCalendar
          ? {
              connect: data.destinationCalendar,
            }
          : undefined,

        eventType: data.eventType
          ? {
              connect: data.eventType,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        cancellationReason: true,
        createdAt: true,
        customInputs: true,

        dailyRef: {
          select: {
            id: true,
          },
        },

        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        fromReschedule: true,
        id: true,
        location: true,
        paid: true,
        recurringEventId: true,
        rejectionReason: true,
        rescheduled: true,
        smsReminderNumber: true,
        startTime: true,
        status: true,
        title: true,
        uid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Booking] })
  @ApiNestedQuery(BookingFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Booking[]> {
    const args = plainToClass(BookingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        cancellationReason: true,
        createdAt: true,
        customInputs: true,

        dailyRef: {
          select: {
            id: true,
          },
        },

        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        fromReschedule: true,
        id: true,
        location: true,
        paid: true,
        recurringEventId: true,
        rejectionReason: true,
        rescheduled: true,
        smsReminderNumber: true,
        startTime: true,
        status: true,
        title: true,
        uid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        cancellationReason: true,
        createdAt: true,
        customInputs: true,

        dailyRef: {
          select: {
            id: true,
          },
        },

        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        dynamicEventSlugRef: true,
        dynamicGroupSlugRef: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        fromReschedule: true,
        id: true,
        location: true,
        paid: true,
        recurringEventId: true,
        rejectionReason: true,
        rescheduled: true,
        smsReminderNumber: true,
        startTime: true,
        status: true,
        title: true,
        uid: true,
        updatedAt: true,

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
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() data: BookingUpdateInput
  ): Promise<Booking | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          dailyRef: data.dailyRef
            ? {
                connect: data.dailyRef,
              }
            : undefined,

          destinationCalendar: data.destinationCalendar
            ? {
                connect: data.destinationCalendar,
              }
            : undefined,

          eventType: data.eventType
            ? {
                connect: data.eventType,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          cancellationReason: true,
          createdAt: true,
          customInputs: true,

          dailyRef: {
            select: {
              id: true,
            },
          },

          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          dynamicEventSlugRef: true,
          dynamicGroupSlugRef: true,
          endTime: true,

          eventType: {
            select: {
              id: true,
            },
          },

          fromReschedule: true,
          id: true,
          location: true,
          paid: true,
          recurringEventId: true,
          rejectionReason: true,
          rescheduled: true,
          smsReminderNumber: true,
          startTime: true,
          status: true,
          title: true,
          uid: true,
          updatedAt: true,

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
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          cancellationReason: true,
          createdAt: true,
          customInputs: true,

          dailyRef: {
            select: {
              id: true,
            },
          },

          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          dynamicEventSlugRef: true,
          dynamicGroupSlugRef: true,
          endTime: true,

          eventType: {
            select: {
              id: true,
            },
          },

          fromReschedule: true,
          id: true,
          location: true,
          paid: true,
          recurringEventId: true,
          rejectionReason: true,
          rescheduled: true,
          smsReminderNumber: true,
          startTime: true,
          status: true,
          title: true,
          uid: true,
          updatedAt: true,

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

  @common.Get("/:id/attendees")
  @ApiNestedQuery(AttendeeFindManyArgs)
  async findManyAttendees(
    @common.Req() request: Request,
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Attendee[]> {
    const query = plainToClass(AttendeeFindManyArgs, request.query);
    const results = await this.service.findAttendees(params.id, {
      ...query,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        locale: true,
        name: true,
        timeZone: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attendees")
  async connectAttendees(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendees")
  async updateAttendees(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendees")
  async disconnectAttendees(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/payment")
  @ApiNestedQuery(PaymentFindManyArgs)
  async findManyPayment(
    @common.Req() request: Request,
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayment(params.id, {
      ...query,
      select: {
        amount: true,

        booking: {
          select: {
            id: true,
          },
        },

        currency: true,
        data: true,
        externalId: true,
        fee: true,
        id: true,
        refunded: true,
        success: true,
        type: true,
        uid: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payment")
  async connectPayment(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payment")
  async updatePayment(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payment")
  async disconnectPayment(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payment: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/references")
  @ApiNestedQuery(BookingReferenceFindManyArgs)
  async findManyReferences(
    @common.Req() request: Request,
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<BookingReference[]> {
    const query = plainToClass(BookingReferenceFindManyArgs, request.query);
    const results = await this.service.findReferences(params.id, {
      ...query,
      select: {
        booking: {
          select: {
            id: true,
          },
        },

        deleted: true,
        externalCalendarId: true,
        id: true,
        meetingId: true,
        meetingPassword: true,
        meetingUrl: true,
        typeField: true,
        uid: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/references")
  async connectReferences(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: BookingReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      references: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/references")
  async updateReferences(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: BookingReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      references: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/references")
  async disconnectReferences(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: BookingReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      references: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/workflowReminders")
  @ApiNestedQuery(WorkflowReminderFindManyArgs)
  async findManyWorkflowReminders(
    @common.Req() request: Request,
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<WorkflowReminder[]> {
    const query = plainToClass(WorkflowReminderFindManyArgs, request.query);
    const results = await this.service.findWorkflowReminders(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflowReminders")
  async connectWorkflowReminders(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflowReminders")
  async updateWorkflowReminders(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflowReminders")
  async disconnectWorkflowReminders(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() body: WorkflowReminderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowReminders: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
