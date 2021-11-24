export const toLabelCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])/)
    .map(split => split[0].toUpperCase() + split.slice(1))
    .join(' ');
};
