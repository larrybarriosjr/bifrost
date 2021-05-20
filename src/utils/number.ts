import { Currency } from "types/skyscanner"

export const monetize = (num: number, currency: Currency) => {
  const {
    SpaceBetweenAmountAndSymbol,
    Symbol,
    SymbolOnLeft,
    ThousandsSeparator
  } = currency

  const space = SpaceBetweenAmountAndSymbol ? " " : ""
  const value = num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/, `$1${ThousandsSeparator}`)

  return SymbolOnLeft
    ? `${Symbol}${space}${value}`
    : `${value}${space}${Symbol}`
}
