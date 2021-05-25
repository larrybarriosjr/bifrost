import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import BookingForm from "components/form/booking/BookingForm"
import ContactDetails from "components/form/booking/ContactDetails"
import FlightDetails from "components/form/booking/FlightDetails"
import TotalPrice from "components/form/booking/TotalPrice"
import { InitialPassengerData } from "defaults/passenger"
import { BifrostRoute } from "defaults/route"
import { validate } from "email-validator"
import { useReferenceCode } from "hooks/useReferenceCode"
import { times } from "lodash"
import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { PassengerData, ReactRouterState } from "types/app"

const BookingPage = () => {
  const stripe = useStripe()
  const elements = useElements()
  const reference = useReferenceCode()
  const history = useHistory()
  const location = useLocation<ReactRouterState>()
  const { flight } = location.state

  const [email, setEmail] = useState<string>("")
  const [passengerData, setPassengerData] = useState<PassengerData[]>([])

  useEffect(() => {
    localStorage.clear()
  }, [])

  useEffect(() => {
    if (!flight.passengers) return
    const p = times(flight.passengers, idx => InitialPassengerData(idx + 1))
    setPassengerData(p)
  }, [flight.passengers])

  const disableButton =
    !validate(email) || !passengerData.every(p => p.fullName)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!elements) return
    const cardElement = elements.getElement(CardElement)

    if (!stripe || !cardElement) return
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    })

    if (error) {
      console.log(error)
    }

    if (paymentMethod?.created) {
      history.replace(BifrostRoute.TICKET, {
        booking: { ...flight, email, passengerData, reference }
      })
    }
  }

  if (!passengerData.length) return null

  return (
    <Fragment>
      <FlightDetails data={flight} />
      {passengerData
        .sort((a, b) => a.id - b.id)
        .map(p => (
          <BookingForm
            key={p.id}
            id={p.id}
            data={passengerData.find(d => d.id === p.id)}
            setData={setPassengerData}
          />
        ))}
      <div className="flex gap-6 w-full">
        <ContactDetails email={email} setEmail={setEmail} />
        <TotalPrice
          data={flight}
          disabled={disableButton}
          onSubmit={handleSubmit}
        />
      </div>
    </Fragment>
  )
}

export default BookingPage
