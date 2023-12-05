/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WorkflowStepWhereUniqueInput } from "../../workflowStep/base/WorkflowStepWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WorkflowStepUpdateManyWithoutWorkflowsInput {
  @Field(() => [WorkflowStepWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkflowStepWhereUniqueInput],
  })
  connect?: Array<WorkflowStepWhereUniqueInput>;

  @Field(() => [WorkflowStepWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkflowStepWhereUniqueInput],
  })
  disconnect?: Array<WorkflowStepWhereUniqueInput>;

  @Field(() => [WorkflowStepWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkflowStepWhereUniqueInput],
  })
  set?: Array<WorkflowStepWhereUniqueInput>;
}

export { WorkflowStepUpdateManyWithoutWorkflowsInput as WorkflowStepUpdateManyWithoutWorkflowsInput };
