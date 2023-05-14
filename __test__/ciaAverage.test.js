const calculateCIAverage = (khaiValues) => {
  if (!khaiValues) return undefined;
  const khaiValueArr = khaiValues
    .filter(({ khaiValue }) => !isNaN(+khaiValue))
    .map(({ khaiValue }) => +khaiValue);

  const averageCIA = Math.round(
    khaiValueArr.reduce((acc, cur) => acc + cur, 0) / khaiValueArr.length
  );

  return averageCIA;
};

test('average', () => {
  const average = calculateCIAverage([
    { khaiValue: 50 },
    { khaiValue: 60 },
    { khaiValue: 70 },
    { khaiValue: '--' },
  ]);
  expect(average).toBe(60);
});
