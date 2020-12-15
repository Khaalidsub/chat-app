import { CreateMessageInput } from './create-message.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  @Field(() => ID)
  id: string;
}
