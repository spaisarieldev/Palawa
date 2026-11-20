import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UiState } from '../../state/ui-state';

@Component({
  selector: 'app-site-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly ui = inject(UiState);
}
