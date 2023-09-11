import { format } from 'date-fns';

export const FORMAT_DATES = {
  LARGE: 'MMM do, yyyy',
  NAME_DAY: 'EEEE',
};

export const formatDate = (
  dateInMilliseconds: number = 0,
  formatDate = 'MMMM dd, yyyy',
) => {
  return format(dateInMilliseconds, formatDate);
};
