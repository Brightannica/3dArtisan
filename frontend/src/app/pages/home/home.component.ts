import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>3D Art Gallery</h2>
    <ul>
      <li *ngFor="let art of artList">{{ art.name }}</li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  artList: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getArtList().subscribe(res => this.artList = res);
  }
}
