import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateMessageInput {
  @Field(() => String)
  @IsString()
  chat: string;
  @Field(() => String)
  @MinLength(2)
  @IsString()
  message: string;

  sender: string;
}
