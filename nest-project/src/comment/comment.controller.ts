import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') _id: string) {
  //   return this.commentService.findOne(_id);
  // }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(_id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.commentService.remove(_id);
  }
}
