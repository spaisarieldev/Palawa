import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiState {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('');
  readonly introVisible = signal(true);
  readonly introDone = signal(false);
  readonly fabHidden = signal(false);
  readonly openSection = signal<string | null>(null);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  sectionVisible(id: string): boolean {
    return this.openSection() === id;
  }

  showSection(id: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen.set(false);

    if (id === 'top') {
      this.openSection.set(null);
      this.activeSection.set('');
    } else {
      this.openSection.set(id);
      this.activeSection.set(id);
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 40);
  }
}
