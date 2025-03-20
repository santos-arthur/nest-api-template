import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class CreateUserDto {
  @IsString({
    message: 'Name must be a string',
  })
  @Length(3, 255, {
    message: 'Name must be at least 3 characters long',
  })
  name: string;

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

  @IsString({
    message: 'Password must be a string',
  })
  @Length(8, 255, {
    message: 'Password must be at least 8 characters long',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number or special character',
  })
  password: string;

  @IsString({
    message: 'Password confirmation must be a string',
  })
  @Length(8, 255, {
    message: 'Password confirmation must be at least 8 characters long',
  })
  @Match('password', {
    message: 'Password confirmation must match password',
  })
  password_confirmation: string;
}
