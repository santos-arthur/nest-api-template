import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository, UserRepository } from '../../repos/user.repository';

@Injectable()
export class SoftDeleteUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: number) {
    await this.userRepository.findById(id).then((user) => {
      if (!user) {
        throw new NotFoundException('User not found');
      }
    });

    this.userRepository.delete(id);

    return {
      message: 'User deleted successfully',
    };
  }
}
