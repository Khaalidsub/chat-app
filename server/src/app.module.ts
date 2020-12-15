import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      include: [ChatModule],
    }),
    MongooseModule.forRoot('mongodb://localhost/chat-system'),
    forwardRef(() => ChatModule),

    UsersModule,

    AuthModule,
  ],
})
export class AppModule {}
