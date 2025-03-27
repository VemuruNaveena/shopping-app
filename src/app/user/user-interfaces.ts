export interface userApiI {
  data: dataApi[];
  status: number;
}

export interface dataApi {
  userName: string;
  Role: string;
}
