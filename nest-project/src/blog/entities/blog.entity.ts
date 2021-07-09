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
  comments?: string[];
}
