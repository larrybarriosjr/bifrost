export const pluralize = (text: string, amount: number) => {
  if (text.endsWith("ey")) {
    return amount > 1 ? text + "s" : text
  }

  if (text.endsWith("y")) {
    return amount > 1 ? text.slice(0, -1) + "ies" : text
  }

  return amount > 1 ? text + "s" : text
}
