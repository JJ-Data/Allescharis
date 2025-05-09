export interface IUser {
  imageSrc?: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt?: Date;
  updatedAt?: Date;
}
