import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialog } from '../components/booking-dialog/booking-dialog';
import { UiState } from '../state/ui-state';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly dialog = inject(MatDialog);
  private readonly ui = inject(UiState);

  open(service = 'Travesía en SUP'): void {
    this.ui.menuOpen.set(false);
    this.dialog.open(BookingDialog, {
      data: { service },
      panelClass: 'booking-panel',
      width: '680px',
      maxWidth: '94vw',
      maxHeight: '92vh',
      autoFocus: 'dialog',
      restoreFocus: true,
      ariaLabel: 'Consulta de disponibilidad',
    });
  }
}
