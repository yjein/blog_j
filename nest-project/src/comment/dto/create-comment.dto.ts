import { ObjectID } from "typeorm";

export class CreateCommentDto {
  _id: ObjectID;
  name: string;
  comment: string;
}
