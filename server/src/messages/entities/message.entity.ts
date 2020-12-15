import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field(() => String)
  chat: string;
  @Field(() => String)
  message: string;
  @Field(() => String)
  sender: string;
}
