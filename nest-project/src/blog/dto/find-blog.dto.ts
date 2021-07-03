import { ObjectID } from 'typeorm';

export class FindBlogDto {
  _id: ObjectID;
  title: string;
  contents: string;
}
