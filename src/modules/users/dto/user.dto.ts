export class UserDto {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly email: string,
    private readonly createdAt: Date,
    private readonly updatedAt: Date
  ) {}
}
