import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  correo = "appsleal@gmail.com";
  password = "masternes1997";

  constructor(public formBuilder: FormBuilder, public httpClient: HttpClient,public toastController: ToastController, public router: Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.myForm.controls;
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.submitted = true;

    this.httpClient.post("http://localhost:4001/api/user/login",this.myForm.value).subscribe(res=>{
      if(res["token"]){
        this.presentToast("Ingresado exitosamente");
        this.router.navigateByUrl("/home/main-page")
      }else{
        this.presentToast("correo contraseña errada");
      }
    },(err)=>{
      this.presentToast("correo contraseña errada");
    })


  }
}
