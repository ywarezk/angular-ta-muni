/**
 * This directive will help us with file upload
 * https://academeez-file-upload.herokuapp.com/api/file
 <form>
    <input
      (progress)="printProgress($event)"
      type="file"
      multiple
      taUpload="https://academeez-file-upload.herokuapp.com/api/file" />
 </form>
 */

import { Directive, HostListener, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: 'input[type="file"][taUpload]'
})
export class UploadDirective {
  @Input('taUpload')
  serverUrl: string;

  constructor(private _http: HttpClient) {}

  @HostListener('change', ['$event'])
  filePicked(event) {
    // we can grab the files and upload them to our server

    const input: HTMLInputElement = event.target;
    const files = input.files;

    const body = new FormData();
    body.append('file', files[0]);

    this._http.post(this.serverUrl, body, {
      reportProgress: true,
      observe: 'events'
    })
  }
}
