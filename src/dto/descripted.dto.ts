import { IsOptional, MaxLength, IsString } from 'class-validator';
import { NamedDto } from './named.dto';

export abstract class DescriptedDto extends NamedDto {
  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  @MaxLength(4000, { message: 'Description must be at max 4000 characters long' })
  description: string;
}
