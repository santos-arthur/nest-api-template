import { Body, Controller, Post, Get } from '@nestjs/common';
import { LoginDto } from './dto';
import { LoginUseCase, LogoutUseCase } from './use-cases';
import { Public, GetUser, GetJwt } from './decorators';
import { User } from '../users/entities/user.entity';

@Controller()
export class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private logoutUseCase: LogoutUseCase
  ) {}

  @Post('login')
  @Public()
  login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto.email, loginDto.password);
  }

  @Post('logout')
  logout(@GetJwt() jwt: string) {
    return this.logoutUseCase.execute(jwt);
  }

  // @Post('forgot-password')
  // forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {}

  // @Post('change-password')
  // changePassword(@Body() changePasswordDto: ChangePasswordDto) {}

  @Get('me')
  async me(@GetUser() user: User) {
    return user;
  }
}
