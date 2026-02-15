import { Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';

@Injectable()
export class TaskService {
  private tasks: CreateTasksDto[] = [];

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((task: any) => task.id === id);
  }

  create(createTasksDto: CreateTasksDto) {
    const task = { id: Date.now(), ...createTasksDto };
    this.tasks.push(task);
    return task;
  }

  update(id: number, updateTasks: CreateTasksDto) {
    const index = this.tasks.findIndex((task: any) => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updateTasks };
      return this.tasks[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.tasks.findIndex((task: any) => task.id === id);

    if (index !== -1) {
      return this.tasks.splice(index, 1)[0];
    }
    return null;
  }
}
