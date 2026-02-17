import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from 'generated/prisma/internal/prismaNamespace';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // findAll() {}

  async findAll(userId: number) {
    try {
      const taskByUser = await this.prisma.task.findMany({
        where: {
          userId: userId,
        }
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (taskByUser.length === 0) {
        console.log("not found tasks for user",userId);
        throw new BadRequestException('Id does not exists');
        
      } 
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return taskByUser;
      
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.log(error.code);
        throw new Error('An error ocurred when get all tasks');
      }
    }
  }

  async create(createTasksDto: CreateTasksDto) {
    try {
      const createTask = await this.prisma.task.create({
        data: {
          title: createTasksDto.title,
          userId: createTasksDto.userId,
        },
      });

      return {
        statusCode: 201,
        // eslint-disable-next-line prettier/prettier
        message: "Task Created successfully",

        data: createTask,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        console.log(error.code);
        throw new BadRequestException('An error ocorrued');
      }
    }
  }

  // update(id: number, updateTasks: CreateTasksDto) {}

  // remove(id: number) {}
}
