import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(User, InputType) {}
