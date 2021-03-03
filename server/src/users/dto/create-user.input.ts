import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import { IUser } from '../types';

@InputType()
export class CreateUserInput implements IUser {
  @Field(() => String)
  @IsString()
  username: string;
  @Field(() => String)
  @IsEmail()
  email: string;
}
