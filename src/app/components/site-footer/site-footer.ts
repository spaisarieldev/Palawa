import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FOOTER_LINKS, MAPS_URL, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from '../../data/site.data';
import { UiState } from '../../state/ui-state';

@Component({
  selector: 'app-site-footer',
  imports: [MatDividerModule],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly ui = inject(UiState);
  protected readonly links = FOOTER_LINKS;
  protected readonly mapsUrl = MAPS_URL;
  protected readonly phone = PHONE_DISPLAY;
  protected readonly phoneIntl = `+598 ${PHONE_E164.slice(3, 5)} ${PHONE_E164.slice(5, 8)} ${PHONE_E164.slice(8)}`;
  protected readonly whatsapp = whatsappUrl();
  protected readonly year = new Date().getFullYear();
}
