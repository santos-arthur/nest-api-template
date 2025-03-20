import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository, IUserRepository } from '../../repos/user.repository';
import { UserAdapter } from '../../user.adapter';

@Injectable()
export class IndexUsersUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly userAdapter: UserAdapter
  ) {}

  async execute() {
    const users = await this.userRepository.find();

    if (users.length === 0) {
      throw new NotFoundException('Users not found');
    }

    return {
      message: 'Users found',
      users: users.map(this.userAdapter.convertToDto),
    };
  }
}
