import { Component, OnInit } from '@angular/core';
import { IndexerService } from 'src/app/services/indexer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  private file: File;

  constructor(private service: IndexerService) {}

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    this.service.digitalizeFile(this.file).subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit() {}
}
