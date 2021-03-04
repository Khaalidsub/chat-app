import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { CurrentUser, GqlAuthGuard } from 'src/auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { ChatService } from './chat.service';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  async createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() user: User,
    @Context('pubSub') pubSub: PubSub,
  ) {
    createChatInput.users.push(user.id);
    const createdChat = await this.chatService.create(createChatInput);
    const chat = await this.chatService.findOne(createdChat.id);
    for (const user of chat.users) {
      pubSub.publish(`onChatCreations:${user.id}`, {
        onChatCreations: chat,
      });
    }

    return this.chatService.findOne(createdChat.id);
  }

  @Query(() => [Chat], { name: 'chats' })
  @UseGuards(GqlAuthGuard)
  async findAll(@CurrentUser() user: User) {
    const chats = await this.chatService.findAll(user);

    return chats;
  }

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  updateChat(@Args('updateChatInput') updateChatInput: UpdateChatInput) {
    return this.chatService.update(updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  removeChat(@Args('id', { type: () => String }) id: string) {
    return this.chatService.remove(id);
  }

  @Subscription(() => Chat)
  @UseGuards(GqlAuthGuard)
  async onChatCreations(
    @CurrentUser() user: User,
    @Context('pubSub') pubSub: PubSub,
  ) {
    console.log(user);

    return pubSub.asyncIterator(`onChatCreations:${user.id}`);
  }
}
