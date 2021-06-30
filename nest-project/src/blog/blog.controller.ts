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
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  // @Get('search')
  // search(@Query('title') searchingTitle: string) {
  //   return `We are searching for a blog with a title: ${searchingTitle}`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogService.findOne(id);
  }

  @Post()
  create(@Body() createData) {
    return this.blogService.create(createData);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updatedBlog: id,
      ...updateData,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.deleteOne(id);
  }
}
