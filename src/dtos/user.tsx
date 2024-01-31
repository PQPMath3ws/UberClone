export interface UserDTO {
  number: string;
  type: "root" | "driver" | "client";
  loggedInAt: Date;
}
