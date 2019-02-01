function handleErrorUI({current}, err) {
  const inputClassList = Array.prototype.find.call(current.parentElement.children,
    node => node.nodeName === 'INPUT').classList;

  switch (err) {
    case null:
      inputClassList.remove('input-validation', 'input-validation--not_valid');
      current.classList.remove('valid', 'not-valid');
      break;

    case true:
      inputClassList.add('input-validation--not_valid', 'input-validation');
      current.classList.add('not-valid');
      current.classList.remove('valid');
      current.style.transformOrigin = 'center';
      break;

    case false:
      inputClassList.add('input-validation');
      inputClassList.remove('input-validation--not_valid');

      current.classList.add('valid');
      current.classList.remove('not-valid');
      current.style.transformOrigin = 'bottom';
      break;

    default:
      console.info('Type of error should be: null or boolean')
  }
}

export default handleErrorUI