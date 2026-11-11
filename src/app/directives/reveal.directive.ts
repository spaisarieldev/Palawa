import { afterNextRender, Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-in]': 'visible()',
  },
})
export class RevealDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      const node = this.host.nativeElement;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(node);
    });
  }
}
