import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { ChatService } from './chat.service';
import { Message } from './models/message.entity';
import { User } from './models/user.entity';

@Resolver(() => Message)
export class ChatResolver {
  private pubSub = new PubSub();
  constructor(private readonly chatService: ChatService) {}

  @Query(() => Message)
  getMessages(@Args('id') chatId: string) {
    return this.chatService.displayMessage(chatId);
  }

  //get message from client
  //push the message to the subscription
  @Mutation(() => Message)
  async sendMessage(
    @Args('message', { type: () => Message }) message: Message,
  ) {
    this.chatService.addMessage(message);
    this.pubSub.publish('messageAdded', {
      messageAdded: this.chatService.displayMessage(message.chatId),
    });

    return message;
  }

  @Mutation(() => User)
  async addUser() {}

  @Mutation(() => User)
  async subscribe() {}
  //recieve and display anything that is called messageAdded
  @Subscription(() => [Message])
  async messageAdded() {
    return this.pubSub.asyncIterator('messageAdded');
  }
}
