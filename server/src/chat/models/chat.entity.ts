import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@InputType('AddChat')
export class Chat {
  @Field(() => String)
  id: string;
  @Field(() => [User])
  users: User[];
}
