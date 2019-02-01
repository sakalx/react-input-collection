function handleDisabledUI({current}, disabled) {
  disabled
    ? current.parentElement.classList.add('input-disabled')
    : current.parentElement.classList.remove('input-disabled');
}

export default handleDisabledUI;