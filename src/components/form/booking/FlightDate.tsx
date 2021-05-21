import { format } from "date-fns"
import { DateFormat } from "defaults/flight"

type FlightDateProps = {
  label: string
  date: Date
}

const FlightDate = ({ label, date }: FlightDateProps) => {
  return (
    <p className="text-blue-900 font-bold">
      {label}:{" "}
      <span className="font-normal">{format(date, DateFormat.DISPLAY)}</span>
    </p>
  )
}

export default FlightDate
