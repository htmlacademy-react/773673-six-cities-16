const isDate = (date: unknown): date is Date => date instanceof Date;

export const formatDate = (date: string | Date): string => {
  const dateInstance = isDate(date) ? date : new Date(date);

  const [month, day, year] = [
    dateInstance.getMonth().toString().padStart(2, '0'),
    dateInstance.getDate(),
    dateInstance.getFullYear(),
  ];

  return [year, month, day].join('-');
};
