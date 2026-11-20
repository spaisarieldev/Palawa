import { Component } from '@angular/core';
import { MAPS_URL, PHONE_DISPLAY, whatsappUrl } from '../../data/site.data';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly mapsUrl = MAPS_URL;
  protected readonly phone = PHONE_DISPLAY;
  protected readonly whatsapp = whatsappUrl();
}
