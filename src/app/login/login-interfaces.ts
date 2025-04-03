export interface loginResponseApi {
  data: dataApi;
  status: number;
}

export interface dataApi {
  token: string;
  user: userApi;
}

export interface userApi {
  userName: string;
  role: string;
}
