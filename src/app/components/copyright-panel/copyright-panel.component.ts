import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright-panel',
  templateUrl: './copyright-panel.component.html',
  styleUrls: ['./copyright-panel.component.scss']
})
export class CopyrightPanelComponent {
  currentYear = new Date().getFullYear();
}
