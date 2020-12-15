import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field(() => String)
  chatId: string;
  @Field(() => String)
  message: string;
  @Field(() => String)
  sender: string;
}
