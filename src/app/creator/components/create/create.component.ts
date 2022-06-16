import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  date;
  name="Tracking_logistica_2.csv"
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: CreatorService) {
    this.service.getFilesDoc().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(
      (d) => String(d.numero_documento).indexOf(val) !== -1 || !val
    );

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  fecha() {
    this.service.getFilesDocFecha(this.date).subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }


  headers = [
    { label: 'SERIAL SIM', key: 'SERIAL_SIM' },
    { label: 'MSISDN-LINEA', key: 'MSISDN_LINEA' },
    { label: 'MUJER EMPRENDIMIENTO BENEFICIADA 2020 2021', key: 'TIPO_BENEFICIARIO' },
    { label: 'NOMBRE COMPLETO BENEFICIARIO', key: 'NOMBRE_COMPLETO' },
    { label: 'TIPO DE DOCUMENTO', key: 'TIPO_DE_DOCUMENTO' },
    { label: 'NUMERO DE DOCUMENTO', key: 'NUMERO_DE_DOCUMENTO' },
    { label: 'NUMERO DE TELEFONO', key: 'NUMERO_DE_TELEFONO' },
    { label: 'DEPARTAMENTO BENEFICIARIO', key: 'DEPARTAMENTO_BENEFICIARIO' },
    { label: 'MUNICIPIO BENEFICIARIO', key: 'MUNICIPIO_BENEFICIARIO' },
    { label: 'DIRECCION BARRIO BENEFICIARIO', key: 'DIRECCION_BARRIO_BENEFICIARIO' },
    { label: 'NOMBRE COMPLETO TUTOR', key: 'NOMBRE_COMPLETO_TUTOR' },
    { label: 'NUMERO DOCUMENTO TUTOR', key: 'NUMERO_DOCUMENTO_TUTOR' },
    { label: 'TELEFONO CONTACTO TUTOR', key: 'TELEFONO_CONTACTO_TUTOR' },
    { label: 'GUIA', key: 'GUIA' },
    { label: 'RECAUDO VALIDADO LG', key: 'RECAUDO_VALIDADO_LG' },
    { label: 'FECHA DESPACHO', key: 'FECHA_DESPACHO' },
    { label: 'FECHA VISITA 1', key: 'FECHA_VISITA_1' },
    { label: 'NOVEDAD 1', key: 'NOVEDAD_1' },
    { label: 'FECHA VISITA 2', key: 'FECHA_VISITA_2' },
    { label: 'NOVEDAD 2', key: 'NOVEDAD_2' },
    { label: 'FECHA ENTREGA', key: 'FECHA_ENTREGA' },
    { label: 'ESTADO ENTREGA', key: 'ESTADO_ENTREGA' },
    { label: 'DIGITALIZACION LOGISTICA', key: 'DIGITALIZACION_LOGISTICA' },
    { label: 'ENTREGA DE DOCUMENTOS', key: 'ENTREGA_DE_DOCUMENTOS' },
    { label: 'SOLUCION NOVEDAD', key: 'SOLUCION_NOVEDAD' },
    { label: 'FECHA SOLUCION', key: 'FECHA_SOLUCION' },
    { label: 'NOMBRE INSTITUCION EDUCATIVA', key: 'NOMBRE_INSTITUCION_EDUCATIVA' },
  ];

  ngOnInit() { }
}
