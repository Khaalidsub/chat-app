import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { ChatService } from './chat.service';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatResolver {
  // private pubSub = new PubSub();
  constructor(private readonly chatService: ChatService) {}

  createChat(@Args('createChatInput') createChatInput: CreateChatInput) {
    return this.chatService.create(createChatInput);
  }

  @Query(() => [Chat], { name: 'chat' })
  findAll() {
    return this.chatService.findAll();
  }

  @Query(() => Chat, { name: 'Chat' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.chatService.findOne(id);
  }

  @Mutation(() => Chat)
  // @UseGuards(GqlAuthGuard, ModeratorGuard)
  updateChat(@Args('updateChatInput') updateChatInput: UpdateChatInput) {
    return this.chatService.update(updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  // @UseGuards(GqlAuthGuard, ModeratorGuard)
  removeChat(@Args('id', { type: () => String }) id: string) {
    return this.chatService.remove(id);
  }

  // @Query(() => Message)
  // getMessages(@Args('id') chatId: string) {
  //   return this.chatService.displayMessage(chatId);
  // }

  // @Query(() => [Chat])
  // getChats(@Args('id') userId: string) {
  //   return this.chatService.displayChats(userId);
  // }

  // //get message from client
  // //push the message to the subscription
  // @Mutation(() => Message)
  // async sendMessage(
  //   @Args('message', { type: () => Message }) message: Message,
  // ) {
  //   this.chatService.addMessage(message);
  //   this.pubSub.publish('messageAdded', {
  //     messageAdded: this.chatService.displayMessage(message.chatId),
  //   });

  //   return message;
  // }

  // @Mutation(() => User)
  // async subscribe() {}
  // //recieve and display anything that is called messageAdded
  // @Subscription(() => [Message])
  // async messageAdded() {
  //   return this.pubSub.asyncIterator('messageAdded');
  // }
}
