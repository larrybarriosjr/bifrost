import { Quote } from "types/skyscanner"

export const isOneWay = (item: Quote) => {
  return Boolean(!item.InboundLeg)
}

export const isRoundTrip = (item: Quote) => {
  return Boolean(item.InboundLeg)
}
