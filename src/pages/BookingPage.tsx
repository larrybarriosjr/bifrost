import BookingForm from "components/form/booking/BookingForm"
import ContactDetails from "components/form/booking/ContactDetails"
import FlightDetails from "components/form/booking/FlightDetails"
import TotalPrice from "components/form/booking/TotalPrice"
import { InitialPassengerData } from "defaults/passenger"
import { LocalStorageKey } from "defaults/web"
import { times } from "lodash"
import { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { PassengerData, ReactRouterState } from "types/app"

const BookingPage = () => {
  const location = useLocation<ReactRouterState>()
  const { data } = location.state

  const [email, setEmail] = useState<string>("")
  const [passengerData, setPassengerData] = useState<PassengerData[]>([])

  useEffect(() => {
    localStorage.removeItem(LocalStorageKey.PASSENGERS)
  }, [])

  useEffect(() => {
    if (!data.passengers) return
    const p = times(data.passengers, idx => InitialPassengerData(idx + 1))
    setPassengerData(p)
  }, [data.passengers])

  const disableButton = !email || !passengerData.every(p => p.fullName)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ ...data, email, passengerData })
  }

  return (
    <Fragment>
      <FlightDetails data={data} />
      {passengerData.length
        ? passengerData
            .sort((a, b) => a.id - b.id)
            .map(p => (
              <BookingForm
                key={p.id}
                id={p.id}
                data={passengerData.find(d => d.id === p.id)}
                setData={setPassengerData}
              />
            ))
        : null}
      <div className="flex gap-6 w-full">
        <ContactDetails email={email} setEmail={setEmail} />
        <TotalPrice
          data={data}
          disabled={disableButton}
          onSubmit={handleSubmit}
        />
      </div>
    </Fragment>
  )
}

export default BookingPage
