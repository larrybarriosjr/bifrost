import { usePassengers } from "hooks/usePassengers"
import { Fragment } from "react"
import { Currency, Quote } from "types/skyscanner"
import { monetize } from "utils/number"

type FlightPriceProps = {
  item: Quote
  currency?: Currency
}

const FlightPrice = ({ item, currency }: FlightPriceProps) => {
  const passengers = usePassengers()

  if (!currency) return null

  return (
    <Fragment>
      {passengers > 1 ? (
        <p className="mr-2 text-sm">
          {monetize(item.MinPrice, currency)} × {passengers}
        </p>
      ) : null}
      <p className="font-bold text-2xl mb-2 mr-2 whitespace-nowrap">
        {monetize(item.MinPrice * passengers, currency)}
      </p>
    </Fragment>
  )
}

export default FlightPrice
