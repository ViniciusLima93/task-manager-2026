import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTasksDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
