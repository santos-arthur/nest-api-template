import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto';

@Injectable()
export class UserAdapter {
  convertToDto(user: User): UserDto {
    return new UserDto(user.id, user.name, user.email, user.createdAt, user.updatedAt);
  }

  convertCreateUserDtoToEntity(dto: CreateUserDto): User {
    return new User(dto.name, dto.email, dto.password);
  }
}
