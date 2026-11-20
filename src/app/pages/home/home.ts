import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MODALITIES, PHONE_DISPLAY } from '../../data/site.data';
import { BookingService } from '../../services/booking.service';
import { UiState } from '../../state/ui-state';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
})
export class Home {
  protected readonly ui = inject(UiState);
  private readonly booking = inject(BookingService);

  protected readonly modalities = MODALITIES;
  protected readonly phone = PHONE_DISPLAY;

  protected shortLabel(id: string): string {
    if (id === 'sup') return 'Travesía SUP';
    if (id === 'surf') return 'Surf / SUP Surf';
    return 'Alquiler';
  }

  protected reserve(service: string): void {
    this.booking.open(service);
  }
}
