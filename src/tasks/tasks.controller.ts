import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import type Request from 'express';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { TaskService } from './task-service.service';

@Controller('tasks')
export class TasksController {
  serviceTask: TaskService;

  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request) {
    return this.serviceTask.findAll();
  }

  // @Get()
  // async findAll(@Query('age') age: number, @Query('breed') breed: string) {
  //   return `This action returns all cats filtereds by age : ${age} and breed ${breed}`;
  // }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: number) {
    return this.serviceTask.findOne(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() CreateTasksDto: CreateTasksDto) {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await this.serviceTask.create(CreateTasksDto);
  }

  @Put(':id')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: CreateTasksDto,
  ) {
    return this.serviceTask.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serviceTask.remove(id);
  }
}
