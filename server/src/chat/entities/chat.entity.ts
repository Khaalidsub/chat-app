import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ChatDocument = Chat & Document;
@ObjectType()
@InputType('InputChat')
@Schema()
export class Chat {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  ChatName: string;
  @Field(() => String)
  @Prop()
  description: string;
  @Field(() => [User])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}
export const ChatSchema = SchemaFactory.createForClass(Chat);
