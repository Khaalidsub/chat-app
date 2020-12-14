import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('AddMessage')
export class Message {
  @Field(() => String)
  name: string;
  @Field(() => String)
  message: string;
}
