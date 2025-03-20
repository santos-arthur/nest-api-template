import { Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { IUserRepository, UserRepository } from '../../repos/user.repository';
import { UserAdapter } from '../../user.adapter';

@Injectable()
export class ActivateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly userAdapter: UserAdapter
  ) {}

  async execute(id: number) {
    const user = await this.userRepository.findByIdWithDeleted(id).then((user) => {
      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.deletedAt === null || user.deletedAt === undefined) {
        throw new UnprocessableEntityException('User is not deleted');
      }

      return user;
    });

    await this.userRepository.activate(id);

    return {
      message: 'User activated successfully',
      user: this.userAdapter.convertToDto(user),
    };
  }
}
