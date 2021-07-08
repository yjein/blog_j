import { Comment } from 'src/comment/entities/comment.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Blog {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  comments?: Comment;
}
