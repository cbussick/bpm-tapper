export const getBpmInMillisecondFormat = (bpm: number): string => {
  const integers = Math.floor(bpm);
  const bpmPreparedForDecimals = Math.round(bpm * 10000);
  const amountIntegerDigits = integers.toString().length;
  const decimalPlaces = bpmPreparedForDecimals
    .toString()
    .slice(amountIntegerDigits);

  return `${integers}.${decimalPlaces || "0000"}`;
};
