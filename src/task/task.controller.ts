import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import type Request from 'express';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private serviceTask: TaskService) {}

  @Post()
  async create(@Body() createTasksDto: CreateTasksDto) {
    return await this.serviceTask.create(createTasksDto);
  }

  @Get(':userId')
  findAllTask(@Param('userId', ParseIntPipe) userId: number) {
    return this.serviceTask.findAll(userId);
  }
}

// @Get()
// @HttpCode(200)
// findAll(@Req() request: Request) {
//   return this.serviceTask.findAll();
// }

// @Get()
// async findAll(@Query('age') age: number, @Query('breed') breed: string) {
//   return `This action returns all cats filtereds by age : ${age} and breed ${breed}`;
// }

// @Put(':id')
// @HttpCode(200)
// update(
//   @Param('id', ParseIntPipe) id: number,
//   @Body() updateTaskDto: CreateTasksDto,
// ) {
//   return this.serviceTask.update(id, updateTaskDto);
// }

// @Delete(':id')
// @HttpCode(204)
// remove(@Param('id', ParseIntPipe) id: number) {
//   return this.serviceTask.remove(id);
// }
