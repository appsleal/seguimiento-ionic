/* eslint-disable @typescript-eslint/naming-convention */
export interface Chips {
  chips: Chip[];
}

export interface Chip {
  ID: number;
  numero_sim: string;
  serial_sim: string;
  municipio: number;
  usado: boolean;
  creationDate: Date;
  updatedAt: Date;
}
