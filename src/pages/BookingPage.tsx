import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import BookingForm from "components/form/booking/BookingForm"
import ContactDetails from "components/form/booking/ContactDetails"
import FlightDetails from "components/form/booking/FlightDetails"
import PaymentDetails from "components/form/booking/PaymentDetails"
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID
} from "defaults/env"
import { InitialPassengerData } from "defaults/passenger"
import { BifrostRoute } from "defaults/route"
import { validate } from "email-validator"
import { send } from "emailjs-com"
import { useReferenceCode } from "hooks/useReferenceCode"
import { times } from "lodash"
import { Fragment, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { EmailFormData, PassengerData, ReactRouterState } from "types/app"
import { transformToEmailForm } from "utils/serializer"

const BookingPage = () => {
  const stripe = useStripe()
  const elements = useElements()
  const reference = useReferenceCode()
  const history = useHistory()
  const location = useLocation<ReactRouterState>()
  const { flight } = location.state

  const [email, setEmail] = useState<string>("")
  const [booker, setBooker] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
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
    !booker || !validate(email) || !passengerData.every(p => p.fullName)

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
      setLoading(false)
      console.log(error)
    }

    if (paymentMethod?.created) {
      const bookingForm = {
        ...flight,
        email,
        booker,
        passengerData,
        reference,
        paymentMethod
      }
      const form: EmailFormData = transformToEmailForm(bookingForm)

      setLoading(true)

      const { status, text } = await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_USER_ID
      )

      if (status === 400) {
        setLoading(false)
        console.log("Error: ", text)
      }
      if (status === 200) {
        setLoading(false)
        history.replace(BifrostRoute.TICKET, { booking: bookingForm })
      }
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
      <div className="flex flex-wrap w-full gap-6 md:flex-nowrap">
        <ContactDetails
          email={email}
          setEmail={setEmail}
          booker={booker}
          setBooker={setBooker}
        />
        <PaymentDetails
          data={flight}
          disabled={disableButton}
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>
    </Fragment>
  )
}

export default BookingPage
