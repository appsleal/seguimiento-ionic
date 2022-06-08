import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../services/creator.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {
  private file: File;

  constructor(private service: CreatorService) {}

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    this.service.uploadFile(this.file).subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit() {}
}
