import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, UserRepository } from '../../repos/user.repository';
import { CreateUserUseCase } from '../create-user/create-user.use-case';

@Injectable()
export class GenerateDefaultUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async execute() {
    const users = await this.userRepository.findWithDeleted();

    if (users.length < 1) {
      await this.createUserUseCase.execute({
        name: process.env.DEFAULT_USER_NAME || 'Admin',
        email: process.env.DEFAULT_USER_EMAIL || 'admin@admin.com',
        password: process.env.DEFAULT_USER_PASS || 'admin',
        password_confirmation: process.env.DEFAULT_USER_PASS || 'admin',
      });
    }
  }
}
