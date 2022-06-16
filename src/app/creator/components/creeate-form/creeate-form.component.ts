import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { ChipsService } from 'src/app/services/chips.service';
import { CreatorService } from 'src/app/services/creator.service';
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
  public telefono:AutoCompleteOptions;
  public ciudad:AutoCompleteOptions;
  pattern = "[A-Z ]";

 

  constructor(private formBuilder: FormBuilder, public service: DataserviceService, public documento:DocumentosService, public departamento:DepartamentoService, private creatorservice: CreatorService, public numeroschips:ChipsService,public toastController: ToastController) { 
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
    this.telefono = new AutoCompleteOptions();
    this.telefono.autocomplete = 'on';
    this.telefono.type = 'search';
    this.telefono.placeholder = 'Ingresar el numero de telefono de la chip';
  }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      MSISDN_LINEA: ['', [Validators.required,Validators.pattern('[0-9 ]*')]],
      TIPO_BENEFICIARIO:['', [Validators.required]],
      NOMBRE_COMPLETO: ['', [Validators.required,Validators.pattern('[A-Z ]*')],],
      TIPO_DE_DOCUMENTO: ['', [Validators.required]],
      NUMERO_DE_DOCUMENTO: ['', [Validators.required,Validators.pattern('[0-9 ]*')]],
      NUMERO_DE_TELEFONO: ['', [Validators.required]],
      MUNICIPIO_BENEFICIARIO: ['', [Validators.required]],
      DIRECCION_BARRIO_BENEFICIARIO: ['', [Validators.required,Validators.pattern('[A-Z0-9 ]*')]],
      NOMBRE_COMPLETO_TUTOR: ['',[,Validators.pattern('[A-Z ]*')]],
      TELEFONO_CONTACTO_TUTOR: ['',[Validators.pattern('[0-9 ]*')]],
      NUMERO_DOCUMENTO_TUTOR: ['',[Validators.pattern('[0-9 ]*')]],
      NOMBRE_INSTITUCION_EDUCATIVA: ['', [Validators.required,,Validators.pattern('[A-Z ]*')]],

    });

    this.formGroup.controls.NOMBRE_COMPLETO.valueChanges.subscribe((value: string) => {
      this.formGroup.controls.NOMBRE_COMPLETO.setValue(value.toUpperCase(), 
      {emitEvent: false});
    })

    this.formGroup.controls.DIRECCION_BARRIO_BENEFICIARIO.valueChanges.subscribe((value: string) => {
      this.formGroup.controls.DIRECCION_BARRIO_BENEFICIARIO.setValue(value.toUpperCase(), 
      {emitEvent: false});
    })

    this.formGroup.controls.NOMBRE_COMPLETO_TUTOR.valueChanges.subscribe((value: string) => {
      this.formGroup.controls.NOMBRE_COMPLETO_TUTOR.setValue(value.toUpperCase(), 
      {emitEvent: false});
    })

    this.formGroup.controls.NOMBRE_COMPLETO_TUTOR.valueChanges.subscribe((value: string) => {
      this.formGroup.controls.NOMBRE_COMPLETO_TUTOR.setValue(value.toUpperCase(), 
      {emitEvent: false});
    })
  }

  onKey(event){
    var pattern = "[A-Za-z ]";
    if(!event.key.match(pattern)){
      var data:string = this.formGroup.get("NOMBRE_COMPLETO").value;
      
      this.formGroup.patchValue({
        "NOMBRE_COMPLETO":data.slice(0,data.length-1)
      })
      
    }
  }

  nombreTutor(event){
    var pattern = "[A-Za-z ]";
    if(!event.key.match(pattern)){
      var data:string = this.formGroup.get("NOMBRE_COMPLETO_TUTOR").value;
      
      this.formGroup.patchValue({
        "NOMBRE_COMPLETO_TUTOR":data.slice(0,data.length-1)
      })
      
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 10000
    });
    toast.present();
  }

  create(){
    let data = this.formGroup.value;
    
    data['DEPARTAMENTO_BENEFICIARIO']=this.departamento.getDepartamento(this.formGroup.get("MUNICIPIO_BENEFICIARIO").value)
    data['SERIAL_SIM']=this.numeroschips.getSerial(this.formGroup.get("MSISDN_LINEA").value)
    this.creatorservice.createfile(data).subscribe(res=>{
      if(res["success"]==true){
        this.presentToast("Creado exitosamte");
      }else{
        this.presentToast(res["message"])
      }
      
    }) 
  }
}
