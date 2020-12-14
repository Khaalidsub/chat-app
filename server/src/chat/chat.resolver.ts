import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { ChatService } from './chat.service';
import { Message } from './models/message.entity';

@Resolver(() => Message)
export class ChatResolver {
  private pubSub = new PubSub();
  constructor(private readonly chatService: ChatService) {}

  @Query(() => Message)
  getMessage() {
    return { name: 'khaalid', message: 'hello' };
  }

  //get message from client
  //push the message to the subscription
  @Mutation(() => Message)
  async sendMessage(
    @Args('message', { type: () => Message }) message: Message,
  ) {
    this.pubSub.publish('messageAdded', { messageAdded: message });
    return message;
  }
  //recieve and display anything that is called messageAdded
  @Subscription(() => Message)
  async messageAdded() {
    return this.pubSub.asyncIterator('messageAdded');
  }
}
