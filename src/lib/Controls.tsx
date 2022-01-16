import React from "react";

function IF({
  children,
  c,
  n = "IF1642337416",
}: {
  children: Array<React.ReactNode> | React.ReactNode;
  c: boolean;
  n?: "IF1642337416";
}) {
  if (!Boolean(children)) return <></>;
  const returnArray: Array<React.ReactNode> = [];
  let cond = c;
  for (let comp of React.Children.toArray(children)) {
    const compName = (comp as any)?.type.toString();
    const incldIF = compName.includes("IF1642337416");
    const els = compName.includes("ELSE1642337416") && !incldIF;
    const elf = compName.includes("ELF1642337416") && !incldIF;
    if (elf || els) {
      if (cond) break;
      cond = els ? true : (comp as any).props.c;
    } else if (cond) returnArray.push(comp);
  }
  return <>{returnArray}</>;
}

export const ELSEIF = ({
  n = "ELF1642337416",
}: {
  c: boolean;
  n?: "ELF1642337416";
}) => <></>;
export const ELSE = ({ n = "ELSE1642337416" }: { n?: "ELSE1642337416" }) => (
  <></>
);

function FOR<T>({
  each,
  from,
}: {
  each: (e: T, index: number) => React.ReactNode;
  from: Array<T>;
}) {
  const toReturn = [];
  let index = 0;
  for (let c of from) {
    toReturn.push(each(c, index));
    index += 1;
  }
  return <>{toReturn}</>;
}

export default { IF, ELSEIF, ELSE, FOR };
