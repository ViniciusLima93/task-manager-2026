import { Body, Controller, Get, HttpCode, Param, Post, Query, Req, Delete , Put } from '@nestjs/common';
import type Request from 'express';
import { CreateTasksDto } from './create-tasks.dto';

@Controller('tasks')
export class TasksController {


  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    return 'This is a list of all tasks';
  }

  // @Get()
  // async findAll(@Query('age') age: number, @Query('breed') breed: string) {
  //   return `This action returns all cats filtereds by age : ${age} and breed ${breed}`;
  // }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id:string) {
    return `This return for id ${id}`
  }


  @Post()
  @HttpCode(201)
  async create(@Body() CreateTasksDto: CreateTasksDto) {
    return 'This action adds new tasks'
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id:string, @Body() updateTaskDto: CreateTasksDto) {
    return `This is a action that will update for tasks with id : ${id}`
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return ` this will delete the task with id :#${id}`;
  }



}
