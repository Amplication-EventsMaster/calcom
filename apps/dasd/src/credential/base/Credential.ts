/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { App } from "../../app/base/App";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { User } from "../../user/base/User";

@ObjectType()
class Credential {
  @ApiProperty({
    required: false,
    type: () => App,
  })
  @ValidateNested()
  @Type(() => App)
  @IsOptional()
  app?: App | null;

  @ApiProperty({
    required: false,
    type: () => [DestinationCalendar],
  })
  @ValidateNested()
  @Type(() => DestinationCalendar)
  @IsOptional()
  destinationCalendars?: Array<DestinationCalendar>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  key!: JsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  typeField!: string;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Credential as Credential };
