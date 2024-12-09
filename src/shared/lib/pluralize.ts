export const pluralize = (count: number = 0, one: string, two?: string, five?: string): string => {
  let wordForm: string;
  if (count % 10 === 1 && count % 100 !== 11) {
    wordForm = one;
  } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    wordForm = two ?? one;
  } else {
    wordForm = five ?? two ?? one;
  }
  return wordForm;
}