import { forwardRef, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      include: [ChatModule],
    }),

    forwardRef(() => ChatModule),

    UsersModule,

    AuthModule,
  ],
})
export class AppModule {}
