import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showDrop = false;

  expandDrop() {
    this.showDrop = !this.showDrop;
  }
}
