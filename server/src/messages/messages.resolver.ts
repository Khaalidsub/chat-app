import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { PubSub } from 'apollo-server-express';
import { CurrentUser, GqlAuthGuard } from '../auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';

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
    const message = await (
      await this.messagesService.findById(newMessage.id)
    ).execPopulate();

    for (const user of message.chat.users) {
      console.log('users message :', user);
      if (user.email !== currentUser.email) {
        this.pubSub.publish(`messageAdded:${user.email}`, {
          messageAdded: message,
        });
      }
    }

    return this.messagesService.findById(message.id);
  }

  @Query(() => [Message], { name: 'messages' })
  findAll() {
    return this.messagesService.findAll();
  }

  @Query(() => Message, { name: 'message' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.messagesService.findOne(id);
  }

  @Mutation(() => Message)
  updateMessage(
    @Args('updateMessageInput') updateMessageInput: UpdateMessageInput,
  ) {
    return this.messagesService.update(
      updateMessageInput.id,
      updateMessageInput,
    );
  }

  @Mutation(() => Message)
  removeMessage(@Args('id', { type: () => String }) id: string) {
    return this.messagesService.remove(id);
  }

  //send messages to everyone once recieved

  @Subscription(() => Message)
  @UseGuards(GqlAuthGuard)
  async messageAdded(@CurrentUser() user: User) {
    return this.pubSub.asyncIterator(`messageAdded:${user.email}`);
  }
}
