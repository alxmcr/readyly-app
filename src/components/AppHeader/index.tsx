import { FORMAT_DATES, formatDate } from '../../helpers/date-helpers';
import './AppHeader.scss';

export default function AppHeader() {
  const title = formatDate(Date.now(), FORMAT_DATES.LARGE);
  const day = formatDate(Date.now(), FORMAT_DATES.NAME_DAY);

  return (
    <section className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__day">{day}</p>
    </section>
  );
}
