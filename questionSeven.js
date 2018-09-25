function verifyRequiredFields() {
  let requiredFields = Array.from(document.querySelectorAll("input")).filter(i => i.required);
  let notFilled = requiredFields.filter(i => !i.value).map(i => i.getAttribute("name") || i.getAttribute("id"))
  notFilled = notFilled.filter(i => !i.includes('secondary') && !i.includes('primaryime'));
  callback(notFilled.length == 1);
}

verifyRequiredFields();