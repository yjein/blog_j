import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  // findOne(_id: string) {
  //   return `This action returns a #${_id} comment`;
  // }

  async update(_id: string, updateCommentDto: UpdateCommentDto) {
    const comment = {
      name: updateCommentDto.name,
      comment: updateCommentDto.comment,
    };

    return await this.commentRepository.update(_id, comment);
  }

  async remove(_id: string) {
    const comment = await this.commentRepository.findOne(_id);

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${_id} not fonud.`);
    }
    this.commentRepository.delete(_id);
  }
}
