import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateUserUseCase,
  IndexUsersUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
  SoftDeleteUserUseCase,
  ActivateUserUseCase,
  GenerateDefaultUserUseCase,
} from './use-cases';
import { UserRepository } from './repos/user.repository';
import { UserAdapter } from './user.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UserRepository,
    {
      provide: 'IUserRepository',
      useExisting: UserRepository,
    },
    CreateUserUseCase,
    IndexUsersUseCase,
    GetUserUseCase,
    UpdateUserUseCase,
    SoftDeleteUserUseCase,
    ActivateUserUseCase,
    GenerateDefaultUserUseCase,
    UserAdapter,
  ],
})
export class UsersModule implements OnApplicationBootstrap {
  constructor(private generateDefaultUserUseCase: GenerateDefaultUserUseCase) {}

  async onApplicationBootstrap() {
    this.generateDefaultUserUseCase.execute();
  }
}
