import { afterNextRender, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { BookingService } from './services/booking.service';
import { UiState } from './state/ui-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly ui = inject(UiState);
  private readonly booking = inject(BookingService);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => this.ui.scrolled.set(window.scrollY > 24);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  protected reserve(): void {
    this.booking.open('Travesía en SUP');
  }
}
