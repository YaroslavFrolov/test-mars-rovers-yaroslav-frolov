export const composeValidators = (...validators) => value => {
  return validators.reduce((error, validator) => error || validator(value), undefined);
};


export const required = errorText => value => {
  const text = errorText || 'required field';
  return !value ? text : '';
}

export const onlyDigits = value => {
  return value && isNaN(Number(value)) ? 'only digits please' : '';
}

export const minFirstSol = value => {
  return value < 1 ? 'minimum 1 sol please' : '';
}

export const maxLastSol = maxSol => value => {
  return value > maxSol ? `maximum ${maxSol} sol please` : '';
}
