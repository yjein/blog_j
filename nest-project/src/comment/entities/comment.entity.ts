import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Comment {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  contents: string;
}
