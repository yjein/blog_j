import { Comment } from 'src/comment/entities/comment.entity';
import { ObjectID } from 'typeorm';

export class CreateBlogDto {
  _id: ObjectID;
  title: string;
  contents: string;
  comments?: Comment;
}
