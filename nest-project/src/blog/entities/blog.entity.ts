import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Blog {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  contents: string;
}
