import { afterNextRender, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {
  DIRECT_MESSAGE,
  FAQS,
  GALLERY,
  MAP_EMBED,
  MAPS_URL,
  MARQUEE,
  MODALITIES,
  NAV,
  PHONE_DISPLAY,
  PILLARS,
  STEPS,
  TRUST,
  whatsappUrl,
  ZONES,
} from '../../data/site.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { BookingService } from '../../services/booking.service';
import { UiState } from '../../state/ui-state';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatRippleModule,
    RevealDirective,
  ],
  templateUrl: './home.html',
})
export class Home implements OnDestroy {
  private readonly ui = inject(UiState);
  private readonly booking = inject(BookingService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cleanups: Array<() => void> = [];

  protected readonly trust = TRUST;
  protected readonly modalities = MODALITIES;
  protected readonly gallery = GALLERY;
  protected readonly steps = STEPS;
  protected readonly pillars = PILLARS;
  protected readonly zones = ZONES;
  protected readonly faqs = FAQS;
  protected readonly marquee = MARQUEE;
  protected readonly mapsUrl = MAPS_URL;
  protected readonly mapEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED);
  protected readonly phone = PHONE_DISPLAY;
  protected readonly directWa = whatsappUrl(DIRECT_MESSAGE);
  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly copies = [1, 2];

  protected readonly selected = signal(0);
  protected readonly compare = signal(52);
  protected readonly activeModality = computed(() => MODALITIES[this.selected()]);

  constructor() {
    afterNextRender(() => this.bindChrome());
  }

  ngOnDestroy(): void {
    this.cleanups.forEach((cleanup) => cleanup());
  }

  protected reserve(service: string): void {
    this.booking.open(service);
  }

  private bindChrome(): void {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) this.ui.activeSection.set(visible.target.id);
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0.15, 0.4, 0.7] },
    );
    sections.forEach((section) => spy.observe(section));

    const visibleZones = new Set<Element>();
    const fabSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleZones.add(entry.target);
          else visibleZones.delete(entry.target);
        });
        this.ui.fabHidden.set(visibleZones.size > 0);
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('[data-fab-hide]').forEach((zone) => fabSpy.observe(zone));

    this.cleanups.push(() => {
      spy.disconnect();
      fabSpy.disconnect();
    });
  }
}
