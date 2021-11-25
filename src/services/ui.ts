export const camelToLabelCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])/)
    .map(split => split[0].toUpperCase() + split.slice(1))
    .join(' ');
};

export const formatDate = (str: string | number): string => {
  if (typeof str !== 'string') {
    return '';
  }
  const splits = str.split('.');
  if (splits.length === 3) {
    const [yyy, mm] = str?.split('.');
    return `${mm}.2${yyy}`;
  } else if (splits.length === 4) {
    const [, yyyy, mm] = str?.split('.');
    return `${mm}.${yyyy}`;
  }
  return str;
};
