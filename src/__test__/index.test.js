import reduction from '../index';

test('проверка функции преобразования номера телефона', () => {
  const arrTel = [
    { tel: '8 (927) 000-00-00', result: '+79270000000' },
    { tel: '+7 960 000 00 00', result: '+79600000000' },
    { tel: '+86 000 000 0000', result: '+860000000000' },
    { tel: '+8(999)-333-35 05', result: '+79993333505' },
  ];
  for (let i = 0; i < arrTel.length; i += 1) {
    expect(reduction(arrTel[i].tel)).toEqual(arrTel[i].result);
  }
});
