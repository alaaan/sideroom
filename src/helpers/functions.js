import { useEffect, useRef } from "react";

export const StringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, index) => args[index] || "");

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function formatMoney(
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
}

export const extractDigits = (text)=> {
  let extracted = text.replace(/[^0-9]+/g, ''); 
  if (extracted.substring(0,1) === "1") {
    extracted = extracted.slice(1);
  }
  return extracted;
}

export function useDidUpdateEffect(fn , inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current)
      fn();
    else
      didMountRef.current = true;
  }, inputs);
}

export const formatPhone = (phoneNumber)=>{
  // loggedInUser.Username.charAt(3)+loggedInUser.Username.charAt(4)})
  return (`(${phoneNumber.charAt(2)+phoneNumber.charAt(3)+phoneNumber.charAt(4)}) ${phoneNumber.charAt(5)+phoneNumber.charAt(6)+phoneNumber.charAt(7)}-${phoneNumber.charAt(8)+phoneNumber.charAt(9)+phoneNumber.charAt(10)+phoneNumber.charAt(11)}`);
}
