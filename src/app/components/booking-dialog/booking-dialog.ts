import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {
  Choice,
  LEVEL_OPTIONS,
  PHONE_DISPLAY,
  SERVICE_OPTIONS,
  whatsappUrl,
} from '../../data/site.data';

export interface BookingPreset {
  service: string;
}

@Component({
  selector: 'app-booking-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'es-UY' }],
  templateUrl: './booking-dialog.html',
})
export class BookingDialog {
  private readonly dialogRef = inject(MatDialogRef<BookingDialog>);
  private readonly data = inject<BookingPreset>(MAT_DIALOG_DATA);

  protected readonly phone = PHONE_DISPLAY;
  protected readonly levels = LEVEL_OPTIONS;
  protected readonly minDate = this.startOfToday();

  protected readonly services: Choice[] = this.buildServices();
  protected readonly service = signal(this.data.service || 'Travesía en SUP');
  protected readonly level = signal(LEVEL_OPTIONS[0].value);
  protected readonly date = signal<Date | null>(this.defaultDate());
  protected readonly notes = signal('');
  protected readonly name = signal('');
  protected readonly sent = signal(false);
  protected readonly step = signal(0);

  protected readonly whenLabel = computed(() => {
    const value = this.date();
    if (!value) return 'Sin fecha elegida';
    return value.toLocaleDateString('es-UY', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  });

  protected readonly message = computed(() => {
    const lines = [
      'Hola Danishka! Vi la web de *SUP Sup-Surf & Surf School* y quería consultar disponibilidad en La Barra:',
      '',
      `• *Modalidad:* ${this.service()}`,
      `• *Nivel / Grupo:* ${this.level()}`,
      `• *Fecha:* ${this.whenLabel()}`,
    ];
    if (this.notes().trim()) lines.push(`• *Detalle:* ${this.notes().trim()}`);
    if (this.name().trim()) lines.push(`• *Nombre:* ${this.name().trim()}`);
    lines.push('', 'Muchas gracias!');
    return lines.join('\n');
  });

  protected readonly waUrl = computed(() => whatsappUrl(this.message()));

  protected choose(target: 'service' | 'level', value: string | null): void {
    if (!value) return;
    if (target === 'service') this.service.set(value);
    if (target === 'level') this.level.set(value);
  }

  protected setDate(event: MatDatepickerInputEvent<Date>): void {
    this.date.set(event.value);
  }

  protected setText(target: 'notes' | 'name', event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (target === 'notes') this.notes.set(value);
    else this.name.set(value);
  }

  protected send(): void {
    window.open(this.waUrl(), '_blank', 'noopener');
    this.sent.set(true);
  }

  protected restart(): void {
    this.step.set(0);
    this.sent.set(false);
  }

  protected close(): void {
    this.dialogRef.close();
  }

  private buildServices(): Choice[] {
    const options = [...SERVICE_OPTIONS];
    const initial = this.data.service || 'Travesía en SUP';
    if (!options.some((option) => option.value === initial)) {
      options.unshift({ value: initial, label: initial });
    }
    return options;
  }

  private startOfToday(): Date {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }

  private defaultDate(): Date {
    const next = this.startOfToday();
    next.setDate(next.getDate() + 1);
    return next;
  }
}

