import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/entities/blog.entity';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'blog',
      entities: [Blog, Comment],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    BlogModule,
    CommentModule,
  ],
})
export class AppModule {}
