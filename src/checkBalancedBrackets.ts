type TOpenings = "{" | "(" | "[";
type TExtendedOpenings = TOpenings | null;
type TClosings = "}" | ")" | "]";

const map: { [key in TOpenings]: TClosings } = {
  "(": ")",
  "[": "]",
  "{": "}"
};

const isOpening = (item: string): item is TOpenings =>
  Object.keys(map).includes(item);

const isClosing = (item: string): item is TClosings =>
  Object.values(map).includes(item as TClosings);

const getBalanceStack = (
  stack: TExtendedOpenings[],
  inChar: string
): TExtendedOpenings[] => {
  if (isOpening(inChar)) {
    return [...stack, inChar];
  } else if (isClosing(inChar)) {
    const lastInTheStack: TExtendedOpenings = stack.slice(-1)[0];

    if (lastInTheStack && inChar === map[lastInTheStack]) {
      return stack.slice(0, -1);
    }

    return [...stack, null];
  }

  return stack;
};

export const checkBalancedBrackets = (inString: string) => {
  return !inString
    ? false
    : inString.split("").reduce(getBalanceStack, []).length === 0;
};
