import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';
import { autoPopulateAllFields } from 'mongoose-autopopulator';
import { PubSub } from 'apollo-server-express';
const pubSub = new PubSub();
console.log(process.env.ENGINE_API_KEY);

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req, connection }) => {
        if (connection?.context) {
          return { req: { headers: connection.context }, pubSub };
        }
        return { req, pubSub };
      },
      installSubscriptionHandlers: true,

      engine: {
        apiKey: process.env.ENGINE_API_KEY,
        reportSchema: true,
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [ChatModule, UsersModule, MessagesModule, AuthModule],
      sortSchema: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB || 'localhost'}/chat-system`,

      {
        // auth: { user: process.env.USERNAME, password: process.env.PASSWORD },
        // authSource: process.env.AUTH_SOURCE,
        connectionFactory: (connection) => {
          connection.plugin(autoPopulateAllFields);

          return connection;
        },
      },
    ),

    ChatModule,
    UsersModule,
    AuthModule,
    MessagesModule,
  ],
})
export class AppModule {}
