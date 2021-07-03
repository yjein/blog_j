import { PartialType } from '@nestjs/mapped-types';
import { ObjectID } from 'typeorm';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
  _id: ObjectID;
}
