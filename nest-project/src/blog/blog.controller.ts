import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    const blog = this.blogService.findAll();

    return blog;
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<Blog> {
    const blog = this.blogService.findOne(_id);

    return blog;
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    const blog = this.blogService.create(createBlogDto);

    return blog;
  }

  @Delete(':id')
  async remove(@Param('id') _id: string) {
    const blog = await this.blogService.deleteOne(_id);

    return blog;
  }

  @Patch(':id')
  async patch(@Param('id') _id: string, @Body() updateBlogDto: UpdateBlogDto) {
    const blog = await this.blogService.update(_id, updateBlogDto);

    return blog;
  }
}
