import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<Blog> {
    return this.blogService.findOne(_id);
  }

  @Patch(':id')
  async update(@Param('id') _id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return await this.blogService.update(_id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') _id: string) {
    return await this.blogService.remove(_id);
  }
}
