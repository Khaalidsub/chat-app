import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Chat } from '../../chat/schemas/chat.schema';
export type MessageDocument = Message & Document;
@Schema()
export class Message {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  sender: User;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  chat: Chat;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
