import { Injectable } from '@nestjs/common';
import { Chat } from './models/chat.entity';
import { Message } from './models/message.entity';
import { User } from './models/user.entity';

@Injectable()
export class ChatService {
  private messages: Message[] = [];
  private users: User[] = [{ name: 'khaalid' }, { name: 'abdi' }];
  private chats: Chat[] = [{ id: '001', users: [this.users[0]] }];

  displayChats(user: User) {
    return this.chats.filter((chat) => chat.users.find((usr) => user === user));
  }
  displayMessage(chatId: string) {
    const list = this.messages.filter((message) => message.chatId === chatId);

    return list;
  }

  addChat(chat: Chat) {
    this.chats.push(chat);
  }
  adduser(user: User) {
    this.users.push(user);
  }
  addMessage(message: Message) {
    this.messages.push(message);
  }

  subscribeChat(user: User, chatId: string) {
    this.chats.map((chat) => {
      if (chat.id == chatId) {
        chat.users.push(user);
        return chat;
      } else return chat;
    });
  }
}
