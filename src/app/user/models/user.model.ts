export interface UserResponse extends UserRequest {
  id: number;
}

export interface UserRequest {
  createdAt: Date;
  name: string;
  avatar: string;
}
