export const formatDate = (date: string): string => {
  const dateInstance = new Date(date);

  const [month, day, year] = [
    dateInstance.getMonth(),
    dateInstance.getDate(),
    dateInstance.getFullYear(),
  ];

  return [month, day, year].join('-');
};
