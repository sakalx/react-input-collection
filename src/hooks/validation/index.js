import {useState} from 'react';

function useValidation(element, err) {
  const [currErr, setCurrErr] = useState(null);

  if (err !== currErr) {
    setCurrErr(err);
    setTimeout(handleErrorUI, 66, element, err);
  }
}


export function handleErrorUI({current}, err) {
  const inputClassList = Array.prototype.find.call(current.parentElement.children,
    node => node.nodeName === 'INPUT').classList;

  switch (err) {
    case null:
      inputClassList.remove('input-valid', 'input-not-valid');
      current.classList.remove('valid', 'not-valid');
      break;

    case true:
      inputClassList.add('input-not-valid', 'input-valid');
      current.classList.add('not-valid');
      current.classList.remove('valid');
      current.style.transformOrigin = 'center';
      break;

    case false:
      inputClassList.add('input-valid');
      inputClassList.remove('input-not-valid');

      current.classList.add('valid');
      current.classList.remove('not-valid');
      current.style.transformOrigin = 'bottom';
      break;

    default:
      console.info('Type of error should be: null or boolean')
  }
}

export default useValidation;