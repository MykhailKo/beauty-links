export const validateForm = (formId) => document.getElementById(formId).checkValidity()

export const checkSimilar = (input, sample, errorMes) => {
  if(document.getElementById(input).value != document.getElementById(sample).value)
    document.getElementById(input).setCustomValidity(errorMes)
  else document.getElementById(input).setCustomValidity('')
}
