import { checkBalancedBrackets } from "./checkBalancedBrackets";

test("normal cases", () => {
  expect(checkBalancedBrackets("(a[0]+b[2c[6]]) {24 + 53}")).toBe(true);

  expect(checkBalancedBrackets("f(e(d))")).toBe(true);

  expect(checkBalancedBrackets("[()]{}([])")).toBe(true);

  expect(checkBalancedBrackets("(){}")).toBe(true);
  expect(
    checkBalancedBrackets(
      "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"
    )
  ).toBe(true);

  expect(checkBalancedBrackets("({(()))}}")).toBe(false);
  expect(checkBalancedBrackets("[ABC[23]][89]")).toBe(true);
});

test("border cases", () => {
  expect(checkBalancedBrackets(")(")).toBe(false);

  expect(checkBalancedBrackets("")).toBe(false);
  expect(checkBalancedBrackets("[()]{}(}[])")).toBe(false);

  expect(checkBalancedBrackets(")()")).toBe(false);
  expect(checkBalancedBrackets("[))]")).toBe(false);
  expect(checkBalancedBrackets("[]]]")).toBe(false);
  expect(checkBalancedBrackets("[}}]")).toBe(false);
});
