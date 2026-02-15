import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor (private authService : AuthService) {}

    @Post('register')
    register(@Body() dto: RegisterDTO) {
        console.log('here')
        return this.authService.register(dto)
    }

}
