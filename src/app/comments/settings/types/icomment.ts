export interface IComment {
  id?: string;
  userName:string;
  commentText:string;
  childrenComments:[];
  date:Date;
}
