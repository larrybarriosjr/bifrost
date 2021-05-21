import { format } from "date-fns"
import { DateFormat } from "defaults/flight"

type FlightDateProps = {
  departureDate: Date
  returnDate?: Date
}

const FlightDate = ({ departureDate, returnDate }: FlightDateProps) => {
  return (
    <p className="text-blue-900 font-bold">
      Flight Details{" "}
      <span className="font-normal">
        ({format(departureDate, DateFormat.DISPLAY)}
        {returnDate ? " to " + format(returnDate, DateFormat.DISPLAY) : ""})
      </span>
    </p>
  )
}

export default FlightDate
