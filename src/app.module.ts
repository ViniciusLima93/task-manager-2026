import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, ConfigModule.forRoot({
    isGlobal:true
  }), PrismaModule, AuthModule, LoginModule],
  controllers: [AppController, TasksController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
