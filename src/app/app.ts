import { afterNextRender, Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { NAV, PHONE_DISPLAY } from './data/site.data';
import { BookingService } from './services/booking.service';
import { UiState } from './state/ui-state';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    SiteHeader,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly ui = inject(UiState);
  private readonly booking = inject(BookingService);
  protected readonly nav = NAV;
  protected readonly phone = PHONE_DISPLAY;
  protected readonly introGo = signal(false);

  constructor() {
    effect(() => {
      document.body.classList.toggle('menu-open', this.ui.menuOpen());
      document.body.classList.toggle('is-ready', this.ui.introDone());
    });

    afterNextRender(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.ui.introDone.set(true);
        this.ui.introVisible.set(false);
      } else {
        requestAnimationFrame(() => this.introGo.set(true));
        setTimeout(() => this.ui.introDone.set(true), 700);
        setTimeout(() => this.ui.introVisible.set(false), 1400);
      }

      const onScroll = () => this.ui.scrolled.set(window.scrollY > 24);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    });
  }

  protected reserve(): void {
    this.booking.open('Travesía en SUP');
  }
}
