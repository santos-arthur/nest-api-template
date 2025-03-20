import { IsString, MaxLength, MinLength } from 'class-validator';

export abstract class NamedDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @MaxLength(255, { message: 'Name must be at max 255 characters long' })
  name: string;
}
