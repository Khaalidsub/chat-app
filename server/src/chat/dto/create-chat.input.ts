import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateChatInput {
  @Field(() => String, { description: 'Chat Name' })
  @IsString()
  ChatName: string;
  @IsString()
  @Field(() => String, { description: 'Description of the chat' })
  description: string;
  @Field(() => [String])
  @IsNotEmpty()
  users: string[];
}
