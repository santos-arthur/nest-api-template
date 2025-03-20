import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository, UserRepository } from '../../repos/user.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UserAdapter } from '../../user.adapter';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly userAdapter: UserAdapter
  ) {}

  async execute(id: number, input: UpdateUserDto) {
    const user = await this.userRepository.findById(id).then((user) => {
      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    });

    if (input.name) {
      user.name = input.name;
    }

    if (input.email) {
      user.email = input.email;
    }

    await this.userRepository.update(user);

    return {
      message: 'User updated successfully',
      user: this.userAdapter.convertToDto(user),
    };
  }
}
