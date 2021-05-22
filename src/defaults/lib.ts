export enum ReactSelectAction {
  CLEAR = "clear",
  CREATE = "create-option",
  DESELECT = "deselect-option",
  POP = "pop-value",
  REMOVE = "remove-value",
  SELECT = "select-option"
}

export const ReactQueryDefaultOptions = {
  defaultOptions: { queries: { enabled: false } }
}

export enum ReactQueryKey {
  CURRENCIES = "currencies",
  RESULTS = "results"
}
