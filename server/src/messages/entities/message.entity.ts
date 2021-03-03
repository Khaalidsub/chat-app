import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Chat } from '../../chat/entities/chat.entity';
import { User } from '../../users/entities/user.entity';
export type MessageDocument = Message & Document;
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
@ObjectType()
@Schema()
export class Message {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Prop()
  message: string;
  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User;
  @Field(() => Chat)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' })
  chat: Chat;
}
export const MessageSchema = SchemaFactory.createForClass(Message);
