import {
  Resolver,
  Query,
  Mutation,
  Args,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { PubSub } from 'apollo-server-express';
import { CurrentUser, GqlAuthGuard } from '../auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
    @CurrentUser() currentUser: User,
    @Context('pubSub') pubSub: PubSub,
  ) {
    const newMessage = await this.messagesService.create({
      ...createMessageInput,
      sender: currentUser.id,
    });
    const message = await this.messagesService.findById(newMessage.id);
    console.log('Here on chat messages', message);

    pubSub.publish(`onChatMessage:${message.chat.id}`, {
      onChatMessage: { ...message } as Message,
    });

    return message;
  }

  @Query(() => [Message], { name: 'messages' })
  @UseGuards(GqlAuthGuard)
  findAll(@CurrentUser() user: User) {
    return this.messagesService.findAll(user);
  }
  @Query(() => [Message], { name: 'chatMessages' })
  @UseGuards(GqlAuthGuard)
  findChatMessages(@CurrentUser() user: User, @Args('id') chatId: string) {
    return chatId.trim()
      ? this.messagesService.findQuery({ chat: chatId })
      : [Message];
  }

  @Query(() => Message, { name: 'message' })
  @UseGuards(GqlAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.messagesService.findOne(id);
  }

  // @Mutation(() => Message)
  // @UseGuards(GqlAuthGuard)
  // updateMessage(
  //   @Args('updateMessageInput') updateMessageInput: UpdateMessageInput,
  //   @CurrentUser() user: User,
  // ) {
  //   if (updateMessageInput.sender.email === user.email) {
  //     return this.messagesService.update(
  //       updateMessageInput.id,
  //       updateMessageInput,
  //     );
  //   }
  //   throw new UnauthorizedException('You cant change this message');
  // }

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  async removeMessage(
    @Args('id', { type: () => String }) id: string,
    @CurrentUser() user: User,
  ) {
    const message = await this.messagesService.findById(id);
    if (message.sender.email === user.email) {
      return this.messagesService.remove(id);
    }
    throw new UnauthorizedException('You cant delete this message');
  }

  //send messages to everyone once recieved

  @Subscription(() => Message)
  @UseGuards(GqlAuthGuard)
  async onChatMessage(
    @Args('id') chatId: string,
    @Context('pubSub') pubSub: RedisPubSub,
  ) {
    return pubSub.asyncIterator(`onChatMessage:${chatId}`);
  }
}
