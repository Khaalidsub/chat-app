import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatInput } from './dto/create-chat.input';
import { Chat, ChatDocument } from './schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private ChatModel: Model<ChatDocument>) {}

  create(createChatInput: CreateChatInput) {
    const newChat = new this.ChatModel(createChatInput);

    return newChat.save();
  }

  findAll() {
    return this.ChatModel.find().exec();
  }

  findOne(id: string) {
    return this.ChatModel.findById(id).exec();
  }
  //!find chats that are for a specific users
  // findQuery(userId:string){
  //   return this.ChatModel.find({'users': userId})
  // }

  update(id: string, data: any) {
    return this.ChatModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.ChatModel.findByIdAndDelete(id).exec();
  }
  // private messages: Message[] = [];
  // private users: User[] = [{ name: 'khaalid' }, { name: 'abdi' }];
  // private chats: Chat[] = [{ id: '001', users: [this.users[0]] }];

  // displayChats(user: string) {
  //   const result = this.chats.filter((chat) =>
  //     chat.users.find((usr) => user === usr.name),
  //   );
  //   console.log(result);
  //   return result;
  // }
  // displayMessage(chatId: string) {
  //   const list = this.messages.filter((message) => message.chatId === chatId);

  //   return list;
  // }

  // addChat(chat: Chat) {
  //   this.chats.push(chat);
  // }
  // adduser(user: User) {
  //   this.users.push(user);
  // }
  // addMessage(message: Message) {
  //   this.messages.push(message);
  // }

  // subscribeChat(user: User, chatId: string) {
  //   this.chats.map((chat) => {
  //     if (chat.id == chatId) {
  //       chat.users.push(user);
  //       return chat;
  //     } else return chat;
  //   });
  // }
}
