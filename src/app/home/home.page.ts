/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  usuario = '';
  password = '';
  logo = 'assets/icon/Logo.jpg';

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private service: AuthService
  ) {}

  get errorControl() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern('[[a-zA-Z0-9]')]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitForm() {
    this.submitted = true;
    this.service.login(this.myForm.value);
  }
}
