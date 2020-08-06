import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-upload-form',
  template: `
    <form>
      <h1>Upload form</h1>
      <input
        (progress)="precentage=$event"
        type="file"
        taUpload="https://academeez-file-upload.herokuapp.com/api/file" />

      <p>
      Progress: {{precentage}}
      </p>
    </form>
  `
})
export class UploadFormComponent {
  precentage = 0;

}
