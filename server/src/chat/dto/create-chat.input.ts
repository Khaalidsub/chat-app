import { InputType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateChatInput {
  @Field(() => String, { description: 'Chat Name' })
  ChatName: string;
  @Field(() => String, { description: 'Description of the chat' })
  description: string;

  @Field(() => [User])
  users: User[];
}
