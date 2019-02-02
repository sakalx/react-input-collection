export const camelCaseToString = string =>
  string.split(/(?=[A-Z])/)
    .map((word, index) =>
      index === 0
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toLowerCase() + word.slice(1)
    ).join(' ');

export const swapName = string =>
  string.replace(/(\w{5})(\w+)/, '$2 $1');