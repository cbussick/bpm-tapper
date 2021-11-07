import React, { ReactNode } from "react";

export const getBpmInMillisecondFormat = (bpm: number): ReactNode => {
  const integers = Math.floor(bpm);
  const bpmPreparedForDecimals = Math.round(bpm * 10000);
  const amountIntegerDigits = integers.toString().length;
  const decimalPlaces = bpmPreparedForDecimals
    .toString()
    .slice(amountIntegerDigits);

  // Decimal places check for when the timer is reset and only shows a "0". It should then still show decimals.
  const bpmInMSFormat = (
    <div>
      <p>{integers}</p>.<p>{decimalPlaces || "0000"}</p>
    </div>
  );

  return bpmInMSFormat;
};
