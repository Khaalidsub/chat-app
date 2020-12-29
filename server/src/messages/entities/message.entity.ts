import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Chat } from '../../chat/entities/chat.entity';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;
  @Field(() => Chat)
  chat: Chat;
  @Field(() => String)
  message: string;
  @Field(() => User)
  sender: User;
}
