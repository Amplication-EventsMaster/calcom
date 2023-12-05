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
  Booking,
  Attendee,
  Payment,
  BookingReference,
  WorkflowReminder,
  DailyEventReference,
  DestinationCalendar,
  EventType,
  User,
} from "@prisma/client";

export class BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BookingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingCountArgs>
  ): Promise<number> {
    return this.prisma.booking.count(args);
  }

  async findMany<T extends Prisma.BookingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>
  ): Promise<Booking[]> {
    return this.prisma.booking.findMany(args);
  }
  async findOne<T extends Prisma.BookingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindUniqueArgs>
  ): Promise<Booking | null> {
    return this.prisma.booking.findUnique(args);
  }
  async create<T extends Prisma.BookingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingCreateArgs>
  ): Promise<Booking> {
    return this.prisma.booking.create<T>(args);
  }
  async update<T extends Prisma.BookingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingUpdateArgs>
  ): Promise<Booking> {
    return this.prisma.booking.update<T>(args);
  }
  async delete<T extends Prisma.BookingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingDeleteArgs>
  ): Promise<Booking> {
    return this.prisma.booking.delete(args);
  }

  async findAttendees(
    parentId: number,
    args: Prisma.AttendeeFindManyArgs
  ): Promise<Attendee[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attendees(args);
  }

  async findPayment(
    parentId: number,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payment(args);
  }

  async findReferences(
    parentId: number,
    args: Prisma.BookingReferenceFindManyArgs
  ): Promise<BookingReference[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .references(args);
  }

  async findWorkflowReminders(
    parentId: number,
    args: Prisma.WorkflowReminderFindManyArgs
  ): Promise<WorkflowReminder[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workflowReminders(args);
  }

  async getDailyRef(parentId: number): Promise<DailyEventReference | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .dailyRef();
  }

  async getDestinationCalendar(
    parentId: number
  ): Promise<DestinationCalendar | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .destinationCalendar();
  }

  async getEventType(parentId: number): Promise<EventType | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}