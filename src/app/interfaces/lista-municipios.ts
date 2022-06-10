/* eslint-disable @typescript-eslint/naming-convention */
export interface ListaMunicipios {
  municipio: Municipio[];
}

export interface Municipio {
  ID: number;
  NOMBRE: string;
  CUPO: number;
  creationDate: Date;
  updatedAt: Date;
}
