export interface IUser {
  imageSrc?: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "USER" | "ADMIN" | "super-admin" | "editor";
  createdAt?: Date;
  updatedAt?: Date;
}
