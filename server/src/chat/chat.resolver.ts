import { Logger, UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { CurrentUser, GqlAuthGuard } from 'src/auth/guards/graph-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { ChatService } from './chat.service';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatResolver {
  private logger: Logger = new Logger(ChatResolver.name);
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  async createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() user: User,
    @Context('pubSub') pubSub: PubSub,
  ) {
    const list = new Set<string>();
    createChatInput.users.push(user.id);

    const createdChat = await this.chatService.create(createChatInput);
    const chat = await this.chatService.findOne(createdChat.id);
    console.log('Here on chat list', { ...chat });
    for (const user of chat.users) {
      pubSub.publish(`onChatCreations:${user.id}`, {
        onChatCreations: { ...chat } as Chat,
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
    @Context('pubSub') pubSub: RedisPubSub,
  ) {
    pubSub.subscribe(`onChatCreations:${user.id}`, (data) =>
      console.error(data),
    );

    return pubSub.asyncIterator(`onChatCreations:${user.id}`);
  }
}
