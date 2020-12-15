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

@Resolver(() => Message)
export class MessagesResolver {
  private pubSub = new PubSub();
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  async sendMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    const message = await this.messagesService.create(createMessageInput);
    const messages = await this.messagesService.findAll();
    console.log('messages', messages);

    this.pubSub.publish('messageAdded', {
      messageAdded: messages,
    });
    return message;
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
  @Subscription(() => [Message])
  async messageAdded() {
    return this.pubSub.asyncIterator('messageAdded');
  }
}
