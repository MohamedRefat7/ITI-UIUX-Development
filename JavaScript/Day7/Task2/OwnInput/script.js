function allowNumbersOnly(event) {
  const regex = /^[0-9]$/;
  const char = String.fromCharCode(event.charCode);
  if (!regex.test(char)) {
    event.preventDefault();
  }
}
