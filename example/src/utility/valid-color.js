const isColorValid = value =>
  /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

export default isColorValid;