import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDTO } from './dto/LoginDTO';
import bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async execute({ email, password }: LoginUserDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) throw new BadRequestException('User does not exists');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new BadRequestException('Credentials invalids');

    return {
      error: false,
      message: 'Sucessfull login',
      user: {
        user: user.name,
        email: user.email,
      },
    };
  }
}
