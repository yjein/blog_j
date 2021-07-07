import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
// import { FindBlogDto } from './dto/find-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async findOne(_id: string): Promise<Blog> {
    const blog = await this.blogRepository.findOne(_id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${_id} not found.`);
    }

    return blog;
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  deleteOne(_id: string) {
    this.findOne(_id);
    this.blogRepository.delete(_id);
  }

  create(createBlogDto: CreateBlogDto) {
    return this.blogRepository.save(createBlogDto);
  }

  async update(_id: string, updateBlogDto: UpdateBlogDto) {
    const blog = await this.blogRepository.findOne(_id);

    return this.blogRepository.save({
      ...blog,
      ...updateBlogDto,
    });
  }
}
