import { ObjectID } from 'typeorm';

export class CreateBlogDto {
  _id: ObjectID;
  title: string;
  contents: string;
}
