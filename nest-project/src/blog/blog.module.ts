import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

import { Comment } from 'src/comment/entities/comment.entity';
import { CommentService } from 'src/comment/comment.service';

@Module({
    imports: [TypeOrmModule.forFeature([Blog, Comment])],
  providers: [BlogService, CommentService],
  controllers: [BlogController],
})
export class BlogModule {}
