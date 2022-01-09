import React from "react";

function IF({
  children,
  c,
}: {
  children: Array<React.ReactNode> | React.ReactNode;
  c: boolean;
}) {
  if (!Boolean(children)) return <></>;
  const returnArray: Array<React.ReactNode> = [];
  let cond = c;
  for (let comp of React.Children.toArray(children)) {
    const compName = (comp as any).type.name;
    if (Boolean(compName)) {
      if (cond) break;
      cond = compName === "ELSE" ? true : (comp as any).props.c;
    } else if (cond) returnArray.push(comp);
  }
  return <>{returnArray}</>;
}

export const ELSEIF = ({ c }: { c: boolean }) => <></>;
export const ELSE = () => <></>;

function FOR<T>({
  each,
  from,
}: {
  each: (e: T) => React.ReactNode;
  from: Array<T>;
}) {
  const toReturn = [];
  for (let c of from) toReturn.push(each(c));
  return <>{toReturn}</>;
}

export default { IF, ELSEIF, ELSE, FOR };
