import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Upload New Art</h2>
    <form (ngSubmit)="submit()">
      <input type="text" [(ngModel)]="name" name="name" placeholder="Art Name" required />
      <button type="submit">Upload</button>
    </form>
  `
})
export class UploadComponent {
  name = '';

  constructor(private api: ApiService) {}

  submit() {
    this.api.uploadArt({ name: this.name }).subscribe(() => {
      alert('Uploaded successfully!');
      this.name = '';
    });
  }
}
