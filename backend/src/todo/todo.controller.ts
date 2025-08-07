import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import * as sharedTypes from 'shared-types';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): sharedTypes.Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): sharedTypes.Todo | undefined {
    return this.todoService.findOne(+id);
  }

  @Post()
  create(@Body() createTodoDto: sharedTypes.CreateTodoDto): sharedTypes.Todo {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: sharedTypes.UpdateTodoDto): sharedTypes.Todo | undefined {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.todoService.remove(+id);
  }
}