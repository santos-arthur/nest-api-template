import { UserAdapter } from '../../user.adapter';
import { CreateUserDto } from '../../dto/create-user.dto';
import { IUserRepository, UserRepository } from '../../repos/user.repository';
import { Inject, Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly userAdapter: UserAdapter
  ) {}

  async execute(input: CreateUserDto) {
    const checkUser = await this.userRepository.findByEmail(input.email);

    if (checkUser) {
      throw new UnprocessableEntityException('User already exists');
    }

    const user = this.userAdapter.convertCreateUserDtoToEntity(input);

    await user.hashPassword();

    await this.userRepository.create(user);

    return {
      message: 'User created successfully',
      user: this.userAdapter.convertToDto(user),
    };
  }
}
