import { Post } from "./Post";
import { User } from "./User";


export interface Like {
  id: string;
  userId: string;
  postId: string;
  user: User;
  post: Post;
  createdAt: Date;
}