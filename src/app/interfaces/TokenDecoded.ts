/* eslint-disable @typescript-eslint/naming-convention */
export interface TokenDecoded {
  usuario: Usuario;
  iat: number;
  exp: number;
}

export interface Usuario {
  id: number;
  username: Username;
  rol: number;
}

export interface Username {
  ID: number;
  usuario: string;
  correo: string;
  password: string;
  rol: number;
  municipio: number;
  ESTATUS: number;
  creationDate: Date;
  updatedAt: Date;
}

export interface LoginToken {
  token: string;
}
