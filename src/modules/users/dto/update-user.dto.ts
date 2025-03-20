import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { NamedDto } from '../../../dto/named.dto';

class _UpdateUserDto extends NamedDto {
  @IsString({
    message: 'Email must be a string',
  })
  @IsEmail(
    {},
    {
      message: 'Email must be a valid email',
    }
  )
  email: string;
}

export class UpdateUserDto extends PartialType(_UpdateUserDto) {}
