import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [ChatModule, UsersModule, MessagesModule],
    }),
    MongooseModule.forRoot('mongodb://localhost/chat-system'),
    forwardRef(() => ChatModule),
    UsersModule,
    AuthModule,
    MessagesModule,
  ],
})
export class AppModule {}
