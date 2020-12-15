import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ChatDocument = Chat & Document;
@Schema()
export class Chat {
  @Prop()
  ChatName: string;
  @Prop()
  description: string;
  //not yet completed
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  users: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
