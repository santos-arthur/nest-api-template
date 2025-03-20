import { User } from '../entities/user.entity';
import { IUserRepository } from './user.repository';

export class UserRepositorySpec implements IUserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  async delete(id: number): Promise<void> {
    const user = await this.findById(id);
    if (user) {
      user.deletedAt = new Date();
    }
  }

  async activate(id: number): Promise<void> {
    const user = await this.findByIdWithDeleted(id);
    if (user) {
      user.deletedAt = null;
    }
  }

  async find(): Promise<User[]> {
    return this.users.filter((user) => !user.deletedAt);
  }

  async findWithDeleted(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<User> {
    return this.users.find((user) => user.id === id && !user.deletedAt);
  }

  async findByIdWithDeleted(id: number): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email && !user.deletedAt);
  }
}
