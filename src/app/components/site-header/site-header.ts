import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NAV } from '../../data/site.data';
import { BookingService } from '../../services/booking.service';
import { UiState } from '../../state/ui-state';

@Component({
  selector: 'app-site-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly ui = inject(UiState);
  protected readonly booking = inject(BookingService);
  protected readonly nav = NAV;

  protected reserve(): void {
    this.booking.open('Travesía en SUP');
  }
}
