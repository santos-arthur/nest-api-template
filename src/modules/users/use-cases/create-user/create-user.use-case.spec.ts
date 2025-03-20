import { CreateUserUseCase } from './create-user.use-case';
import { UserRepositorySpec } from '../../repos/user-spec.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserAdapter } from '../../user.adapter';

let createUserUseCase: CreateUserUseCase;
let userRepository: UserRepositorySpec;
let userAdapter: UserAdapter;

let testUser: CreateUserDto;

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    userRepository = new UserRepositorySpec();
    userAdapter = new UserAdapter();
    createUserUseCase = new CreateUserUseCase(userRepository, userAdapter);

    jest.useFakeTimers();

    testUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
      password_confirmation: '123456',
    };
  });

  it('should create a user', async () => {
    expect(userRepository.users.length).toBe(0);

    const result = await createUserUseCase.execute(testUser);
    const user = userAdapter.convertCreateUserDtoToEntity(testUser);
    const userDto = userAdapter.convertToDto(user);

    expect(result).toHaveProperty('message', 'User created successfully');
    expect(result).toHaveProperty('user', userDto);

    expect(userRepository.users.length).toBe(1);
  });

  it('should throw an error when user already exists', async () => {
    expect(userRepository.users.length).toBe(0);

    await createUserUseCase.execute(testUser);

    expect(userRepository.users.length).toBe(1);

    await expect(createUserUseCase.execute(testUser)).rejects.toThrow('User already exists');

    expect(userRepository.users.length).toBe(1);
  });
});
