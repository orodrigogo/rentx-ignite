interface ICreateUsersDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
  avatar?: string;
}

export { ICreateUsersDTO };
