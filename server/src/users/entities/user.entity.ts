import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IUser } from '../types';

@ObjectType()
export class User implements IUser {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  email: string;
}
