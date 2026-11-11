import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiState {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('');
  readonly introVisible = signal(true);
  readonly introDone = signal(false);
  readonly fabHidden = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
