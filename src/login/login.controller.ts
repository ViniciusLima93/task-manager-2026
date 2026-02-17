import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LoginUserDTO } from './dto/LoginDTO';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  @HttpCode(200)
  login(@Body() userLogin: LoginUserDTO) {
    console.log('login');
    return this.loginService.execute(userLogin);
  }
}
