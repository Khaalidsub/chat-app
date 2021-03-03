import { ObjectType, Field, Int, ID, InputType } from '@nestjs/graphql';
import { IUser } from '../types';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;
@Schema()
@ObjectType()
@InputType('ChatUser')
export class User implements IUser {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  username: string;
  @Field(() => String)
  @Prop()
  email: string;
}

@InputType('ChatUser')
export class ChatUser implements IUser {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  email: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
