import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from '../chat/schemas/chat.schema';
import { CreateMessageInput } from './dto/create-message.input';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private MessageModel: Model<MessageDocument>,
  ) {}

  async create(Message: CreateMessageInput) {
    const createdMessage = new this.MessageModel(Message);
    return (await createdMessage.save()).populate('sender').populate('chat');
  }

  findAll() {
    return this.MessageModel.find().populate('chat').populate('sender').exec();
  }

  getCurrentMessagesChat(chatId: Chat) {
    return this.MessageModel.find({ chat: chatId })
      .populate('chat')
      .populate('sender')
      .exec();
  }

  findOne(query) {
    return this.MessageModel.findOne(query).exec();
  }

  findById(id: string) {
    return this.MessageModel.findById(id)
      .populate('sender')
      .populate('chat')
      .exec();
  }

  update(id: string, data: any) {
    return this.MessageModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.MessageModel.findByIdAndDelete(id).exec();
  }
}
