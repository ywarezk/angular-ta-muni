import { MatDatepickerIntl } from '@angular/material/datepicker';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurData extends MatDatepickerIntl {
  /** A label for the calendar popup (used by screen readers). */
  calendarLabel: string = 'לוח שנה';

  /** A label for the button used to open the calendar popup (used by screen readers). */
  openCalendarLabel: string = 'פתח';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel: string = 'דגכש';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel: string = 'סזבהז';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel: string = 'שדגכ';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel: string = 'זבסה';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel: string = 'כעיחכע';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel: string = 'זסבה';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel: string = 'שדגכשגד';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel: string = 'בהמבהנ';
}
