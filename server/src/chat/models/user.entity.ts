import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('AddUser')
export class User {
  @Field(() => String)
  name: string;
}
