import { GetUserUseCase } from './get-user.use-case';
import { UserRepositorySpec } from '../../repos/user-spec.repository';
import { User } from '../../entities/user.entity';
import { UserAdapter } from '../../user.adapter';

let getUserUseCase: GetUserUseCase;
let userRepository: UserRepositorySpec;
let userAdapter: UserAdapter;

let testUser: User;

describe('GetUserUseCase', () => {
  beforeEach(() => {
    userRepository = new UserRepositorySpec();
    userAdapter = new UserAdapter();
    getUserUseCase = new GetUserUseCase(userRepository, userAdapter);

    testUser = new User('Test User', 'test@example.com', 'password');
  });

  it('should return a user when user exists', async () => {
    userRepository.users.push(testUser);

    const result = await getUserUseCase.execute(testUser.id);
    const userDto = userAdapter.convertToDto(testUser);

    expect(result).toHaveProperty('message', 'User found');
    expect(result).toHaveProperty('user', userDto);
  });

  it('should throw NotFoundException when user does not exist', async () => {
    await expect(getUserUseCase.execute(999)).rejects.toThrow('User not found');
  });
});
