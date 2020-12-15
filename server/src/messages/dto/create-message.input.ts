import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => String)
  chatId: string;
  @Field(() => String)
  message: string;
  @Field(() => String)
  sender: string;
}
