import { GenerateDefaultUserUseCase } from './generate-default-user.use-case';
import { UserRepositorySpec } from '../../repos/user-spec.repository';
import { CreateUserUseCase } from '../create-user/create-user.use-case';
import { User } from '../../entities/user.entity';
import { UserAdapter } from '../../user.adapter';

let generateDefaultUserUseCase: GenerateDefaultUserUseCase;
let userRepository: UserRepositorySpec;
let createUserUseCase: CreateUserUseCase;
let userAdapter: UserAdapter;

describe('GenerateDefaultUserUseCase', () => {
  beforeEach(() => {
    userRepository = new UserRepositorySpec();
    userAdapter = new UserAdapter();
    createUserUseCase = new CreateUserUseCase(userRepository, userAdapter);
    generateDefaultUserUseCase = new GenerateDefaultUserUseCase(userRepository, createUserUseCase);
  });

  it('should create a default user when no users exist', async () => {
    expect(userRepository.users.length).toBe(0);

    await generateDefaultUserUseCase.execute();

    expect(userRepository.users.length).toBe(1);

    const createdUser = userRepository.users[0];

    expect(createdUser.name).toBe('Admin');
    expect(createdUser.email).toBe('admin@admin.com');
    expect(createdUser.password).not.toBe('admin');
  });

  it('should not create a default user when users already exist', async () => {
    const existingUser = new User('Existing User', 'existing@example.com', 'password');
    userRepository.users.push(existingUser);

    expect(userRepository.users.length).toBe(1);

    await generateDefaultUserUseCase.execute();

    expect(userRepository.users.length).toBe(1);
  });
});
