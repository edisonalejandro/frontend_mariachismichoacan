import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mariachis-front';

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.init();
  }
}
