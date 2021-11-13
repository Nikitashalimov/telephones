export default function reduction(tel) {
  const check1 = (/^\+86/.test(tel));
  if (check1) {
    let newNumber = tel.replace(/\D/g, '');
    newNumber = `+${newNumber}`;
    return newNumber;
  }
  let newNumber = tel.replace(/\D/g, '');
  newNumber = newNumber.replace(/^(7|8)/, '+7');
  return newNumber;
}
