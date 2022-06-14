import { Component, OnInit } from '@angular/core';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  private file: File;

  constructor(private service: CreatorService) {}

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    this.service.uploadFile(this.file).subscribe((res) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }
  ngOnInit() {}
}
