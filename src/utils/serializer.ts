import { format } from "date-fns"
import { DateFormat, FlightTypeDisplay } from "defaults/flight"
import { BookingData, EmailFormData } from "types/app"
import { isOneWay } from "./boolean"
import { monetize } from "./number"

export const transformToEmailForm = (form: BookingData): EmailFormData => {
  const {
    booker,
    email,
    carrier,
    currency,
    destination,
    item,
    origin,
    passengerData,
    passengers,
    paymentMethod,
    reference
  } = form
  const cardDetails = `${paymentMethod.card?.brand.toUpperCase()} ${
    paymentMethod.card?.last4
  }`
  const quoteDateTime = format(
    new Date(item.QuoteDateTime),
    DateFormat.DISPLAY + ", h:mm a"
  )

  const destinationLocation = `${destination.CityName}, ${destination.CountryName}`
  const originLocation = `${origin.CityName}, ${origin.CountryName}`

  const ticketPrice = monetize(item.MinPrice, currency)
  const totalPrice = monetize(item.MinPrice * passengers, currency)

  const flightType = item.InboundLeg
    ? FlightTypeDisplay.ROUND_TRIP
    : FlightTypeDisplay.ONE_WAY

  const flightDate = isOneWay(item)
    ? format(new Date(item.OutboundLeg.DepartureDate), DateFormat.DISPLAY)
    : `${format(
        new Date(item.OutboundLeg.DepartureDate),
        DateFormat.DISPLAY
      )} to ${format(
        new Date(item.InboundLeg.DepartureDate),
        DateFormat.DISPLAY
      )}`

  const passengerList = `<ol>${passengerData
    .map(p => `<li>${p.id}. ${p.honorific}. ${p.fullName} (${p.ageGroup})</li>`)
    .join("")}</ol>`

  return {
    booker,
    carrier_name: carrier.Name,
    currency_code: currency.Code,
    destination_code: destination.IataCode,
    destination_location: destinationLocation,
    destination_terminal: destination.Name,
    email,
    flight_date: flightDate,
    flight_type: flightType,
    origin_code: origin.IataCode,
    origin_location: originLocation,
    origin_terminal: origin.Name,
    passenger_count: passengers,
    passenger_list: passengerList,
    payment_method: cardDetails,
    quote_datetime: quoteDateTime,
    reference_code: reference,
    ticket_price: ticketPrice,
    total_price: totalPrice
  }
}
