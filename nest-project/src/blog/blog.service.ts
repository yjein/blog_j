import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    this.blogRepository.create({
      ...createBlogDto,
    });
  }

  async findOne(_id: string): Promise<Blog> {
    const blog = this.blogRepository.findOne(_id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${_id} not found.`);
    }

    return blog;
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  async deleteOne(_id: string): Promise<boolean> {
    this.findOne(_id);
    this.blogRepository.delete(_id);
    return true;
  }

  async update(_id: string, updateBlogDto: UpdateBlogDto) {
    const blog = this.findOne(_id);
    this.deleteOne(_id);
    // this.blogRepository.update({
    //   ...blog,
    //   ...updateBlogDto,
    // });
  }
}
