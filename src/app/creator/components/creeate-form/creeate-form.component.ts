import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-creeate-form',
  templateUrl: './creeate-form.component.html',
  styleUrls: ['./creeate-form.component.scss'],
})
export class CreeateFormComponent implements OnInit {
  formGroup: FormGroup;
  public labelAttribute:string;
  public objects:any[];
  public options:AutoCompleteOptions;
  public tipo_cedula:AutoCompleteOptions;
  public ciudad:AutoCompleteOptions;
  pattern = "[A-Z ]";

 

  constructor(private formBuilder: FormBuilder, public service: DataserviceService, public documento:DocumentosService, public departamento:DepartamentoService) { 
    this.options = new AutoCompleteOptions();
    this.options.autocomplete = 'on';
    this.options.type = 'search';
    this.options.placeholder = 'Seleccionar tipo de usuario';
    this.tipo_cedula = new AutoCompleteOptions();
    this.tipo_cedula.autocomplete = 'on';
    this.tipo_cedula.type = 'search';
    this.tipo_cedula.placeholder = 'Seleccionar tipo de documento';
    this.ciudad = new AutoCompleteOptions();
    this.ciudad.autocomplete = 'on';
    this.ciudad.type = 'search';
    this.ciudad.placeholder = 'Seleccionar ciudad';
  }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      serial_sim: ['', [Validators.required]],
      numero_sim: ['', [Validators.required]],
      tipo:['', [Validators.required]],
      nombre: ['', [Validators.required,Validators.pattern('[A-Z ]*')],],
      tipo_docu: ['', [Validators.required]],
      num_doc: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      nombre_tutor: [''],
      telefono_tutor: [''],
      cdula_tutor: [''],
      nombre_institucion: ['', [Validators.required]],

    });

    this.formGroup.controls.nombre.valueChanges.subscribe((value: string) => {
      this.formGroup.controls.nombre.setValue(value.toUpperCase(), 
      {emitEvent: false});
    })
  }

  onKey(event){
    var pattern = "[A-Za-z ]";
    if(!event.key.match(pattern)){
      var data:string = this.formGroup.get("nombre").value;
      
      this.formGroup.patchValue({
        "nombre":data.slice(0,data.length-1)
      })
      
    }
  }

  create(){
    console.log(this.formGroup.value);
    
  }
}
