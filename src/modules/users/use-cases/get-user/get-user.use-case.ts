import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository, UserRepository } from '../../repos/user.repository';
import { UserAdapter } from '../../user.adapter';

@Injectable()
export class GetUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly userAdapter: UserAdapter
  ) {}

  execute(id: number) {
    return this.userRepository.findById(id).then((user) => {
      if (!user) {
        throw new NotFoundException('User not found');
      }

      return {
        message: 'User found',
        user: this.userAdapter.convertToDto(user),
      };
    });
  }
}
