import { Users } from "./user.api.model";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export interface CombinedData {
//     user: Users;
//     post: Posts;
//   }
  export interface CombinedData {
    user: Users;
    post: Posts | undefined;
  }