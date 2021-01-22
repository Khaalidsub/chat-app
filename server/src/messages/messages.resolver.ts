import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { PubSub } from 'apollo-server-express';
import { CurrentUser, GqlAuthGuard } from '../auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';

@Resolver(() => Message)
export class MessagesResolver {
  private pubSub = new PubSub();
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
    @CurrentUser() currentUser: User,
  ) {
    const newMessage = await this.messagesService.create(createMessageInput);

    this.pubSub.publish(`onChatMessage:${newMessage.chat}`, {
      onChatMessage: newMessage,
    });

    return newMessage;
  }

  @Query(() => [Message], { name: 'messages' })
  @UseGuards(GqlAuthGuard)
  findAll(@CurrentUser() user: User) {
    return this.messagesService.findAll(user);
  }
  @Query(() => [Message], { name: 'chatMessages' })
  @UseGuards(GqlAuthGuard)
  findChatMessages(@CurrentUser() user: User, @Args('id') chatId: string) {
    console.log('in chat', chatId);

    return this.messagesService.findQuery({ chat: chatId });
  }

  @Query(() => Message, { name: 'message' })
  @UseGuards(GqlAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.messagesService.findOne(id);
  }

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  updateMessage(
    @Args('updateMessageInput') updateMessageInput: UpdateMessageInput,
    @CurrentUser() user: User,
  ) {
    if (updateMessageInput.sender.email === user.email) {
      return this.messagesService.update(
        updateMessageInput.id,
        updateMessageInput,
      );
    }
    throw new UnauthorizedException('You cant change this message');
  }

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
  async onChatMessage(@Args('id') chatId: string) {
    return this.pubSub.asyncIterator(`onChatMessage:${chatId}`);
  }
}
